const express =  require('express');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register',  async (req,res) => {
	const { error } = registerValidation(req.body);
	if(error){
		return res.status(400).send(error.details[0].message);	
	}

	const user = await User.findOne({ email: req.body.email })

	if(user){
		res.json({'user ':'already exist'}).status(400);
	}
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	try{
		const newUser = new User({
			username : req.body.username,
			password : hashedPassword,
			email : req.body.email
		});
		const result = newUser.save(); 
		res.json({"message":"user successfuly created"}).status(201);
	}catch(error){
		res.send(error).status(400);
	}
});


router.post('/login', async  (req, res) => {
	try{
		const { error } = loginValidation(req.body);
		if(error){
			return res.status(400).send(error.details[0].message);
		}
		const user = await User.findOne({ username : req.body.username}).exec();

		if(!user){
			return res.json({"message":"username or password incorrect"}).status(404)
		}

		const checkhashedPassword = await bcrypt.compare(req.body.password, user.password);

		if(!checkhashedPassword){
			return res.json({"message":"username or password incorrect!"}).status(404)
		}
		const token = jwt.sign({ _id: user.id },process.env.TOKEN_SECRET);
		res.json({"data":{"token": token,"message":"loggedin"}})

	}catch(error){
		res.send(error).status(500)
	}
})


module.exports = router;