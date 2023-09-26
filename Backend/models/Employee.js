const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeManagementSchema = new Schema(
	{
		firstName: {
			type: String,
			maxlength: 10,
			minLength: 2,
			required: true,
		},
		lastName: {
			type: String,
			maxlength: 10,
			minLength: 2,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		nic: {
			type: String,
			required: true,
		},
		dateOfBirth: {
			type: Date,
			required: true,
		},
		phoneNumber: {
			type: Number,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		joiningDate: {
			type: Date,
			required: true,
		},
		designation: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		// isEmployee: {
		// 	type: Boolean,
		// 	default: true,
		// },
	},
	{ timestamps: true },
);

//export model
module.exports = mongoose.model(
	"EmployeeManagement",
	EmployeeManagementSchema,
);
