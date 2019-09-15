const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
	username : {
		type : String,
		min : 3,
		max: 255,
		required : true
	},
	email : {
		type : String,
		required : true,
		min: 6,
		max: 255

	},
	password : {
		type : String,
		required : true
	},
	date : {
		type : Date,
		default : Date.now
	}

})


module.exports = mongoose.model('User', userSchema);