const router = require("express").Router();
const { Router } = require("express");
const employeeController = require("../controllers/employeeController");

//route for create new Employee
router.route("/add").post((req, res) => {
	const response = employeeController.addEmployeeController(
		req.body,
		res,
	);

	return response;
});

//route for view All emaployee details
router.route("/view-all").get((req, res) => {
	const response = employeeController.viewEmployeeController(
		req.body.data,
		res,
	);
	return response;
});

//route for update Employee details
router.route("/update-employee/:id").put((req, res) => {
	let id = req.params.id;
	let updateEmployee = {
		id: id,
		body: req.body,
	};
	const response = employeeController.updateEmployeeController(
		updateEmployee,
		res,
	);
	return response;
});

//route for delete Employee details

router.route("/delete-employee/:id").put((req, res) => {
	const id = req.params.id; // Use req.params.id to get the employee ID from the URL
	const deleteEmployee = {
		id: id,
		body: req.body,
	};
	const response = employeeController.deleteEmployeeController(
		deleteEmployee,
		res,
	);
	return response;
});

//route for single view of Employee Details

router.route("/view-single-employee/:id").get((req, res) => {
	let id = req.params.id;
	let getData = {
		id: id,
		body: req.body,
	};
	const response = employeeController.singleEmployeeViewController(
		getData,
		res,
	);
	return response;
});

//export routes
module.exports = router;
