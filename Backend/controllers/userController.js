const userService = require('../services/userService');
const { ResponseStatusCodes } = require('../util/constants/responseStatusCodes');
const { ResponseCommonMessages } = require('../util/constants/responseCommonMessages');

module.exports.addUserDetails = async (req, res) => {
    try {
        const serviceResponse = await userService.addUserDetails(req.body, req.user);
        return res.status(200).json({ success: true, data: serviceResponse.data, showMessage: false });
    } catch (err) {
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
    }
};

module.exports.signin = async (req, res) => {
    try {
        const serviceResponse = await userService.signin(req.body, req.user);
        return res.status(200).json({ success: true, data: serviceResponse.data, showMessage: false });
    } catch (err) {
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
    }
};