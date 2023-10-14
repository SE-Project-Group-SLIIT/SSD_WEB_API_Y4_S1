const Joi = require("joi");

const employeeManagementValidation = {
	schemaValidation: Joi.object().keys({
		firstName: Joi.string()
			.alphanum()
			.min(2)
			.max(10)
			.trim()
			.required(),
		lastName: Joi.string().alphanum().min(2).max(10).trim().required(),
		address: Joi.string().min(2).max(30).required(),
		nic: Joi.string().max(12).required(),
		dateOfBirth: Joi.date().required(),
		phoneNumber: Joi.number()
			.required(),
		emailAddress: Joi.string().email().required(),
		gender: Joi.string().required(),
		joiningDate: Joi.date().required(),
		designation: Joi.string().min(2).max(20).required(),
		isActive: Joi.boolean(),
	}),
	updateSchemaValidation: Joi.object().keys({
		firstName: Joi.string().alphanum().min(2).max(10).trim(),
		lastName: Joi.string().alphanum().min(2).max(10).trim(),
		address: Joi.string().min(2).max(30),
		nic: Joi.string().max(12),
		dateOfBirth: Joi.date(),
		phoneNumber: Joi.number(),
		emailAddress: Joi.string().email(),
		gender: Joi.string(),
		joiningDate: Joi.date(),
		designation: Joi.string().min(2).max(20),
		isActive: Joi.boolean(),
		id: Joi.string(),
	}),
};

//export validations
module.exports = employeeManagementValidation;
