let User = require('../models/User');

let jwt = require('jsonwebtoken');
let config = require('../config/config.js');

const BadRequestException = require('../util/exceptions/badRequestException');

module.exports.addUserDetails = async (requestBody, requestUser) => {

    try {
        const firstName = requestBody.firstName;
        const lastName = requestBody.lastName;
        const nic = requestBody.nic;
        const email = requestBody.email;
        const role = requestBody.role;
        const isActive = requestBody.isActive;
        const password = requestBody.password;

        const newUser = await new User({
            firstName,
            lastName,
            nic,
            email,
            role,
            isActive,
            password,
        });

        const response = await newUser.save();

        return {
            message: 'Company data generated',
            data: response
        };
    }
    catch (err) {
        throw err;
    }
};

module.exports.signin = async (requestBody, requestUser) => {
    requestBody.email = requestBody.email.toLowerCase();
	const {
		email,
		password
	} = requestBody;

    try {
        let signInUser = await User.findOne({
            email
        }).exec();

        if (!signInUser) {
			throw new BadRequestException('Authentication failed. User not found.');
		}

        const isMatch = await signInUser.comparePassword(password);

        if (isMatch) {
            const signinUserTokenData = {
                email: signInUser.email,
                isActive: signInUser.isActive,
                _id: signInUser._id,
            };

            const token = jwt.sign(signinUserTokenData, config.passport.secret, {
                expiresIn: 100000,
            });

            return {
                data: {
                    token: 'JWT ' + token,
                    isActive: signInUser.isActive,
                    userId: signInUser._id,
                },
                msg: 'Login successful.',
            };
        }
        else if(isMatch){
            return {
                data: {
                    is_invalid_password: true,
                },
            };
        }
        else {
            throw new BadRequestException('Incorrect email or password provided.');
        }

    }
    catch (err) {
        throw err;
    }
};



