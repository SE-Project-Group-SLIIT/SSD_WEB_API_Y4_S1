const Employee = require("../models/Employee");

//create service for add employee details

module.exports.addEmployeeService = async (req, res) => {
	try {
		const firstName = req.firstName;
		const lastName = req.lastName;
		const address = req.address;
		const nic = req.nic;
		const dateOfBirth = req.dateOfBirth;
		const phoneNumber = req.phoneNumber;
		const emailAddress = req.emailAddress;
		const gender = req.gender;
		const joiningDate = req.joiningDate;
		const designation = req.designation;
		const isActive = req.isActive;

		const newEmployee = await new Employee({
			firstName,
			lastName,
			address,
			nic,
			dateOfBirth,
			phoneNumber,
			emailAddress,
			gender,
			joiningDate,
			designation,
			isActive,
		});

		const response = await newEmployee.save();
		return {
			msg: "Employee Added",
			data: response,
		};
	} catch (error) {
		console.log(error, "error");
		throw error;
	}
};

//create service for view all employee details

module.exports.viewAllEmployeeService = async (req, res) => {
	try {
		let response = await Employee.find();

		if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "faild",
				data: response,
			};
		}
	} catch (err) {
		throw err;
	}
};

//create service for update employee details

module.exports.updateEmployeeService = async (req, res) => {
	try {
		let id = req.params.id;
		let idString = id.toString();
		const {
			firstName,
			lastName,
			address,
			nic,
			dateOfBirth,
			phoneNumber,
			emailAddress,
			gender,
			joiningDate,
			designation,
			isActive,
		} = req.body;

		const updateUser = {
			firstName,
			lastName,
			address,
			nic,
			dateOfBirth,
			phoneNumber,
			emailAddress,
			gender,
			joiningDate,
			designation,
			isActive,
		};
		let response = await Employee.findByIdAndUpdate(
			{ _id: idString },
			updateUser,
		);
		if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "faild",
				data: response,
			};
		}
	} catch (err) {
		throw err;
	}
};

//create service for delete employee details

module.exports.deleteEmployeeService = async (req, res) => {
	try {
		const id = req.params.id;
		const idString = id.toString();

		// Update the isActive field to false and return the updated employee
		const updatedEmployee = await Employee.findByIdAndUpdate(
			{ _id: idString },
			{ isActive: false },
			{ new: true },
		);

		if (updatedEmployee) {
			return {
				msg: "success",
				data: updatedEmployee,
			};
		} else {
			return {
				msg: "fail",
				data: null,
			};
		}
	} catch (err) {
		throw err;
	}
};

//create service for search single employee details

module.exports.singleEmployeeViewService = async (req, res) => {
	try {
		const id = req.params.id;
		const idString = id.toString();
		let response = await Employee.findOne({ _id: idString });

		if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "faild",
				data: response,
			};
		}
	} catch (err) {
		throw err;
	}
};
