const Joi = require('joi');
const userValidationSchema = {
	saveUserDetails: Joi.object().keys({
		firstName: Joi.string().alphanum().min(2).max(10).trim().required(),
		lastName: Joi.string().alphanum().min(2).max(10).trim().required(),
		nic: Joi.string().max(12).required(),
		email: Joi.string().email().required(),
		role: Joi.string().min(2).max(20).required(),
		isActive: Joi.boolean()
	}),
};

module.exports = userValidationSchema;