module.exports = function (router, passport) {
  var bodyParser = require("body-parser");
  var jsonParser = bodyParser.json();
  const employeeController = require("../../controllers/employeeController");
  const validationsMiddleware = require("../../validators/commonValidatorsjoi");
  const employeeManagementValidation = require("../../validators/validationJoiSchemas/employeeValidation");
  const { limiter } = require("../../middleware/rateLimitingMiddleware");

  //check each request for authenticate only customer accounts
  const permissionCheckMiddleware = (action_type) => {
    return (req, res, next) => {
      try {
        if (!req.user.isActive) {
          res.status(355).send(req.user.email);
        } else {
          let action_list = req.user.permissions.access_levels;
          switch (action_type) {
            case "employeeManage":
              action_list.includes("employeeManage")
                ? next()
                : res.sendStatus(401);
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
    // limiter,
    jsonParser,
    validationsMiddleware(
      employeeManagementValidation.schemaValidation,
      "body"
    ),
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.addEmployeeController
  );

  //view all employee details route
  router.get(
    "/view-all",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.viewEmployeeController
  );

  //update employee details route

  router.put(
    "/update_employee",
    limiter,
    jsonParser,
    validationsMiddleware(
      employeeManagementValidation.updateSchemaValidation,
      "body"
    ),
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.updateEmployeeController
  );

  //inactive employee details route

  router.put(
    "/inactive_employee",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.deleteEmployeeController
  );

  //view single employee details route

  router.get(
    "/view/single_employee",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.singleEmployeeViewController
  );

  router.get(
    "/get-inactive-employees",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.viewInactiveEmployeesController
  );

  router.get(
    "/get-active-employees",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.viewActiveEmployeesController
  );

  //active employee details route

  router.put(
    "/active_employee",
    limiter,
    jsonParser,
    passport.authenticate("jwt", {
      session: false,
    }),
    permissionCheckMiddleware("employeeManage"),
    employeeController.activeEmployeeController
  );
};
