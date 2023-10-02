const employeeService = require("../services/employeeService");
const {
	ResponseStatusCodes,
} = require("../util/constants/responseStatusCodes");
const {
	ResponseCommonMessages,
} = require("../util/constants/responseCommonMessages");

//create controller for create new employee

module.exports.addEmployeeController = async (req, res) => {
	try {
		const employeeResponse = await employeeService.addEmployeeService(
			req.body,
		);
		console.log(req.body);
		return res.status(200).json({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

//create controller for view all employee details

module.exports.viewEmployeeController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.viewAllEmployeeService(req);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

//create controller for update employee details

module.exports.updateEmployeeController = async (req, res) => {
	try {
		let employeeResponse = await employeeService.updateEmployeeService(
			req.body,
		);
		console.log(employeeResponse);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

//create controller for delete employee details

module.exports.deleteEmployeeController = async (req, res) => {
	try {
		let employeeResponse = await employeeService.deleteEmployeeService(
			req.body,
		);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

//create controller for view single employee details

module.exports.singleEmployeeViewController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.singleEmployeeViewService(req);

		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

module.exports.viewInactiveEmployeesController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.getInactiveEmployeesService(req);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

module.exports.viewActiveEmployeesController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.getActiveEmployeesService(req);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};

//create controller for active employee details

module.exports.activeEmployeeController = async (req, res) => {
	try {
		let employeeResponse = await employeeService.activeEmployeeService(
			req.body,
		);
		return res.status(200).send({
			success: true,
			data: employeeResponse.data,
			showMessage: false,
		});
	} catch (err) {
		return res
			.status(
				err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
			)
			.json({
				success: false,
				msg:
					err.msg ||
					ResponseCommonMessages.INTERNAL_SERVER_ERROR,
			});
	}
};