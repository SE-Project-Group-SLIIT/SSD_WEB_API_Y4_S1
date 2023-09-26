let User = require('../models/User');

module.exports.addUserDetails = async (requestBody, requestUser) => {

    try {
        const firstName = requestBody.firstName;
        const lastName = requestBody.lastName;
        const nic = requestBody.nic;
        const email = requestBody.email;
        const role = requestBody.role;
        const isActive = requestBody.isActive;

        const newUser = await new User({
            firstName,
            lastName,
            nic,
            email,
            role,
            isActive,
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

