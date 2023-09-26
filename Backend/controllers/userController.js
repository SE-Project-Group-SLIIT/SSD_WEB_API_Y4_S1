const userService = require('../services/userService');

module.exports.addUserDetails = async (req, res) => {
    try {
        const serviceResponse = await userService.addUserDetails(req.body, req.user);
        return res.status(200).json({ success: true, data: serviceResponse.data, showMessage: false });
    } catch (err) {
        return res.status(err.status).json({ success: false, msg: err.msg });
    }
};