/*
*IMPORTS
*/
const express = require('express');
const Card = require('../models/Card');
const auth = require('./verfyToken');

/*
*INSTATIATE THE ROUTER
*/
const router = express.Router();


/*
**type GET route : returns all cards json object
*/
router.get('/',auth, async (req, res) => {
	try{
		const cards = await Card.find().exec();
		res.json(cards);
	}catch(error){
		res.status(500).send(error);
	}
})


/*
** type POST route 
** & request vars => title, question, answer
** & returns posted card json object
*/
router.post('/',auth,  async (req, res) => {
	try{
		const card = new Card({
			title : req.body.title,
			cardFront : req.body.question,
			cardBack : req.body.answer
		});
		const result = await card.save();
		res.json(result).status(201);

	}catch(error){
		res.status(500).send(error);
	}
})


/*
** type PUT route
**& vars
**
*/
router.put('/:id', auth, async (req,res) => {
	try{
		const card = await Card.updateOne({_id : req.params.id}, {$set : {
			title : req.body.title,
			cardFront : req.body.question,
			cardBack : req.body.answer,
			dateEdited : Date.now(),
			isEdited : true

		}}).exec();
		
		// const result = await card.save();
		res.json({'message': 'card updated'}).status(200);
	}catch(error){
		res.send(error).status(500)
	}
})


/*
** type GET route
**& vars _id object id
**& returns the specific object
*/
router.get('/:id',auth,  async (req, res) => {
	try{
		const card = await Card.findById(req.params.id).exec();
		res.json(card).status(200);
	}catch(error){
		res.status(404).send(error);
	}
})

/*
** type DELETE route
**& vars id
**& returns message with status 200
*/
router.delete('/:id',auth, async (req,res) => {
	try{
		const result = await Card.deleteOne({ _id : req.params.id }).exec();
		res.json({'message':'card removed successfuly'}).status(200);
	}catch(error){
		res.status(400).send(error);
	}
})

module.exports = router;

