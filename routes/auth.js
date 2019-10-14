const express =  require('express');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req,res) => {
	const { error } = registerValidation(req.body);
	if(error){
		return res.status(200).json({ fieldError: error.details[0].message });	
	}

	const user = await User.findOne({ email: req.body.email })

	if(user){
		res.json({  userError :'already exist'}).status(200);
	}
	const salt = bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	try{
		const newUser = new User({
			username : req.body.username,
			password : hashedPassword,
			email : req.body.email
		});
		const result = newUser.save(); 
		res.json({ success :"user successfuly created"}).status(201);
	}catch(error){
		res.send(error).status(500);
	}
});


router.post('/login', async  (req, res) => {
	try{

		/* Query the data for existing users */
		const user = await User.findOne({ username : req.body.username}).exec();

		/* If there aren't any user is means  */
		if(!user){
			return res.json({ userError :"username or password incorrect"}).status(200)
		}

		const checkhashedPassword = await bcrypt.compare(req.body.password, user.password);

		if(!checkhashedPassword){
			return res.json({ authError :"username or password incorrect!"}).status(200)
		}
		const token = jwt.sign({ _id: user.id },process.env.TOKEN_SECRET);
		res.json({ data :{"token": token,"message":"loggedin"}}).status(200);

	}catch(error){
		res.send(error).status(500)
	}
})


module.exports = router;