let User = require("../models/User");

let jwt = require("jsonwebtoken");
let config = require("../config/config.js");

const BadRequestException = require("../util/exceptions/badRequestException");

module.exports.addUserDetails = async (requestBody, requestUser) => {
	try {
		const firstName = requestBody.firstName;
		const lastName = requestBody.lastName;
		const nic = requestBody.nic;
		const email = requestBody.email;
		const isActive = requestBody.isActive;
		const password = requestBody.password;

		// Set permissions based on the role and condition
		let permissions;
		if (requestBody.role === 0) {
			permissions = {
				role: 0,
				access_levels: [
					"employeeManage",
					"rentalMange",
					"vehicleManage",
					"userManage",
				], // Set to "allaccess" when role is 0
			};
		} else {
			permissions = {
				role: requestBody.role,
				access_levels: requestBody.permissions || [], // Use provided permissions or an empty array
			};
		}

		const newUser = new User({
			firstName,
			lastName,
			nic,
			email,
			isActive,
			password,
			permissions,
		});

		const response = await newUser.save();

		return {
			message: "User data generated",
			data: response,
		};
	} catch (err) {
		throw err;
	}
};

module.exports.signin = async (requestBody, requestUser) => {
	requestBody.email = requestBody.email.toLowerCase();
	const { email, password } = requestBody;

	try {
		let signInUser = await User.findOne({ email }).exec();

		if (!signInUser) {
			throw new BadRequestException(
				"Authentication failed. User not found.",
			);
		}

		const isMatch = await signInUser.comparePassword(password);

		if (isMatch) {
			const signinUserTokenData = {
				email: signInUser.email,
				isActive: signInUser.isActive,
				_id: signInUser._id,
				permissions: signInUser.permissions,
			};

			const token = jwt.sign(
				signinUserTokenData,
				config.passport.secret,
				{
					expiresIn: 100000,
				},
			);

			const returnData = {
				token: "JWT " + token,
				isActive: signInUser.isActive,
				userId: signInUser._id,
				permissions: signInUser.permissions,
			};

			return {
				data: returnData,
				msg: "Login successful.",
			};
		} else {
			return {
				data: {
					is_invalid_password: true,
				},
			};
		}
	} catch (err) {
		throw err;
	}
};



