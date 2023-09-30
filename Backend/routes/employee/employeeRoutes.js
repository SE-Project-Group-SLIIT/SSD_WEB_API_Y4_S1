module.exports = function (router, passport) {
	var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
	const employeeController = require("../../controllers/employeeController");
	const validationsMiddleware = require("../../validators/commonValidatorsjoi");
	const employeeManagementValidation = require("../../validators/employeeValidation");

	//add employee details route
	router.post(
		"/save_employee_details",
		jsonParser,
		validationsMiddleware(
			employeeManagementValidation.schemaValidation,
			"body",
		),
		passport.authenticate("jwt", {
			session: false,
		}),
		employeeController.addEmployeeController,
	);

	//view all employee details route
	router.get(
		"/view-all",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		employeeController.viewEmployeeController,
	);

	//update employee details route

	router.put(
		"/update_employee/:id",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		(req, res) => {
			// Extract the id from the query parameters
			const id = req.params.id;
			employeeController.updateEmployeeController(req, res, id);
		},
	);

	//inactive employee details route

	router.put(
		"/inactive_employee/:id",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		(req, res) => {
			// Extract the id from the query parameters
			const id = req.params.id;
			employeeController.deleteEmployeeController(req, res, id);
		},
	);

	//view single employee details route

	router.get(
		"/view/single_employee/:id",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		(req, res) => {
			// Extract the id from the query parameters
			const id = req.params.id;
			employeeController.singleEmployeeViewController(req, res, id);
		},
	);
};
