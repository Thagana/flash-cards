const Joi = require('@hapi/joi');


const registerValidation = (requestBody) => {
	const schema = {
		username : Joi.string()
					.min(3)
					.required(),
		email : Joi.string().required().email(),
		password : Joi.string().min(6).required()
	};

	return Joi.validate(requestBody, schema);
};

const loginValidation = (requestBody) => {
	const schema = {
		username : Joi.string()
					.required(),
		password : Joi.string()
					.required()
	};

	return Joi.validate(requestBody, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;