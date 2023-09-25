const {response} = require("express");
const employeeService = require("../services/employeeService");

module.exports.addEventController = async (req,res) =>{
    try {
        let eventResponse = await employeeService.addEventService(req);
        if (eventResponse.msg='success') {
            return res.status(200).send({ message: "Event added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add event" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
