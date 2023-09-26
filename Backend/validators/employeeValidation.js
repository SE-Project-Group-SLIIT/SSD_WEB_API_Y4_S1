const Joi = require("joi");

const employeeManagementValidation = (data) => {
	const schemaValidation = Joi.object({
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
			// .length(10)
			// .pattern(/[6-9]{1}[0-9]{9}/)
			.required(),
		emailAddress: Joi.string().email().required(),
		gender: Joi.string().required(),
		joiningDate: Joi.date().required(),
		designation: Joi.string().min(2).max(20).required(),
		isActive: Joi.boolean(),
	});

	return schemaValidation.validate(data);
};

//export validations
module.exports.employeeManagementValidation = employeeManagementValidation;
