const { response } = require("express");
const employeeService = require("../services/employeeService");
const employeeManagementValidation = require("../validators/employeeValidation");

//create controller for create new employee

module.exports.addEmployeeController = async (req, res) => {
	try {
		const { error } =
			employeeManagementValidation.employeeManagementValidation(
				req.body,
			);
		if (error) {
			return res
				.status(300)
				.send({ message: "Vaalidation Failed...!", err: error });
		}

		let employeeResponse = await employeeService.addEmployeeService(
			req,
		);
		if ((employeeResponse.msg = "success")) {
			return res
				.status(200)
				.send({ message: "Employee added successfuly!" });
		} else {
			return res
				.status(400)
				.send({ message: "Failed to add employee" });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ message: "Internal server error", err: err.message });
	}
};

//create controller for view all employee details

module.exports.viewEmployeeController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.viewAllEmployeeService(req);
		if ((employeeResponse.msg = "success")) {
			return res.status(200).send({
				message: "Employee details retrieved successfuly!",
				data: employeeResponse.data,
			});
		} else {
			return res
				.status(400)
				.send({ message: "Failed to retriev Employee details" });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ message: "Internal server error", err: err.message });
	}
};

//create controller for update employee details

module.exports.updateEmployeeController = async (req, res) => {
	try {
		let employeeResponse = await employeeService.updateEmployeeService(
			req,
		);
		if ((employeeResponse.msg = "success")) {
			return res.status(200).send({
				message: "Employee updated successfuly!",
				data: employeeResponse.data,
			});
		} else {
			return res.status(400).send({
				message: "Failed to update employee",
				data: null,
			});
		}
	} catch (err) {
		return res
			.status(500)
			.send({ message: "Internal server error", err: err.message });
	}
};

//create controller for delete employee details

module.exports.deleteEmployeeController = async (req, res) => {
	try {
		let employeeResponse = await employeeService.deleteEmployeeService(
			req,
		);

		if (employeeResponse.msg === "success") {
			return res.status(200).send({
				message: "Employee details deleted Successfully!",
				data: employeeResponse.data.isActive,
			});
		} else {
			return res.status(400).send({
				message: "Failed to delete employee details",
				data: null,
			});
		}
	} catch (err) {
		return res.status(500).send({
			message: "Internal server error",
			err: err.message,
		});
	}
};

//create controller for view single employee details

module.exports.singleEmployeeViewController = async (req, res) => {
	try {
		let employeeResponse =
			await employeeService.singleEmployeeViewService(req);

		if (employeeResponse.msg === "success") {
			return res.status(200).send({
				message: "Searched Employee details found",
				data: employeeResponse.data,
			});
		} else {
			return res.status(400).send({
				message: "Failed to find searched employee details",
				data: null,
			});
		}
	} catch (err) {
		return res.status(500).send({
			message: "Internal server error",
			err: err.message,
		});
	}
};
