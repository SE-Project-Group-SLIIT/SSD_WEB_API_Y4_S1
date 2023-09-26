const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
		nic: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true },
);

//export model
module.exports = mongoose.model(
	"User",
	UserSchema,
);
