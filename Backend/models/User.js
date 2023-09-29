const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
		password: {
			type: String
		}
	},
	{ timestamps: true },
);


UserSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('password') && !user.isNew) {
		return next();
	}

	bcrypt.genSalt(10)
		.then((salt) => {
			bcrypt.hash(user.password, salt)
				.then((hash) => {
					user.password = hash;
					next();
				})
				.catch((err) => {
					return next(err);
				});
		})
		.catch((err) => {
			return next(err);
		});
});

// UserSchema.methods.comparePassword = function (passw, cb) {
// 	bcrypt.compare(passw, this.password, function (err, isMatch) {
// 		if (err) {
// 			return cb(err);
// 		}
// 		cb(null, isMatch);
// 	});
// };
// Modify the comparePassword method to return a promise
UserSchema.methods.comparePassword = function (passw) {
	return new Promise((resolve, reject) => {
	  bcrypt.compare(passw, this.password, (err, isMatch) => {
		if (err) {
		  reject(err);
		} else if (isMatch) {
		  resolve(isMatch);
		} else {
		  reject(new Error('Incorrect email or password provided.'));
		}
	  });
	});
  };
//export model
module.exports = mongoose.model(
	"User",
	UserSchema,
);
