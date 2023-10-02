module.exports = function (router, passport) {
	var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
	const employeeController = require("../../controllers/employeeController");
	const validationsMiddleware = require("../../validators/commonValidatorsjoi");
	const employeeManagementValidation = require("../../validators/validationJoiSchemas/employeeValidation");

	//check each request for authenticate only customer accounts
	const permissionCheckMiddleware = (action_type) => {
		return (req, res, next) => {
			try {
				if (!req.user.isActive) {
					res.status(355).send(req.user.email);
				}
				else {
					const action_list = req.user.permissions.access_levels;
					switch (action_type) {
					case 'employeeManage':
						action_list.include('employeeManage') ? next() : res.sendStatus(401);
						break;
					default:
						res.sendStatus(401);
					}
				}
			} catch (err) {
				res.sendStatus(401);
			}
		};
	};
	
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
		"/update_employee",
		jsonParser,
		validationsMiddleware(
			employeeManagementValidation.updateSchemaValidation,
			"body",
		),
		passport.authenticate("jwt", {
			session: false,
		}),
		// (req, res) => {
		// 	// Extract the id from the query parameters
		// 	const id = req.params.id;
			employeeController.updateEmployeeController,
		// },
	);

	//inactive employee details route

	router.put(
		"/inactive_employee",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		// (req, res) => {
			// Extract the id from the query parameters
			// const id = req.params.id;
			employeeController.deleteEmployeeController,
		// },
	);

	//view single employee details route

	router.get(
		"/view/single_employee",
		jsonParser,
		passport.authenticate("jwt", {
			session: false,
		}),
		// (req, res) => {
		// 	// Extract the id from the query parameters
		// 	const id = req.params.id;
			employeeController.singleEmployeeViewController,
		// },
	);

	router.get(
		"/get-inactive-employees",
		jsonParser,
		passport.authenticate("jwt", {
		  session: false,
		}),
		employeeController.viewInactiveEmployeesController,
	  );

	  router.get(
		"/get-active-employees",
		jsonParser,
		passport.authenticate("jwt", {
		  session: false,
		}),
		employeeController.viewActiveEmployeesController,
	  );
};
