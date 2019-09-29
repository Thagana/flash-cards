const mongoose = require('mongoose');


const CardSchema = mongoose.Schema({
	title : {
		type : String,
		required : false
	},
	cardFront : {
		type : String,
		required : true
	},
	cardBack :{
		type : String,
		required : true
	},
	date : {
		type : Date,
		default : Date.now
	},
	rating : {
		type : Number,
		defualt : 0
	},
	opened : {
		type : Number,
		defualt : 0
	},
	isEdited : {
		type : Boolean,
		default : false
	},
	dateEdited : {
		type : Date
	},
	author: {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'User'
	}
});

module.exports = mongoose.model('Cards', CardSchema );