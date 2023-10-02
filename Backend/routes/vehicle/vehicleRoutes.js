module.exports = function (router, passport) {
    const bodyParser = require("body-parser");
    const jsonParser = bodyParser.json();
    const vehicleController = require("../../controllers/vehicleController");
    const validationsMiddleware = require("../../validators/commonValidatorsjoi");
    const vehicleValidation = require("../../validators/validationJoiSchemas/vehicleValidation");
    const { limiter } = require("../../middleware/rateLimitingMiddleware");
  
    // Check each request for authentication and permissions
    const permissionCheckMiddleware = (action_type) => {
      return (req, res, next) => {
        try {
          if (req.user.status !== 'active') {
            res.status(355).send(req.user.email);
          } else {
            let action_list = req.user.permissions.access_levels;
            switch (action_type) {
              case "vehicleManage":
                action_list.includes("vehicleManage")
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
  
    // Add vehicle details route
    router.post(
      "/addVehicle",
      jsonParser,
      validationsMiddleware(vehicleValidation.schemaValidation, "body"),
      passport.authenticate("jwt", {
        session: false,
      }),
      permissionCheckMiddleware("vehicleManage"),
      vehicleController.addVehicleController
    );
  
    // View all vehicle details route
    router.get(
      "/view-all",
      limiter,
      jsonParser,
      passport.authenticate("jwt", {
        session: false,
      }),
      permissionCheckMiddleware("vehicleManage"),
      vehicleController.viewAllVehiclesController
    );
  
    // Update vehicle details route
    router.put(
      "/updateVehicle",
      limiter,
      jsonParser,
      validationsMiddleware(vehicleValidation.updateSchemaValidation, "body"),
      passport.authenticate("jwt", {
        session: false,
      }),
      permissionCheckMiddleware("vehicleManage"),
      vehicleController.updateVehicleController
    );
  
    // Delete vehicle details route
    router.put(
      "/deleteVehicle",
      limiter,
      jsonParser,
      passport.authenticate("jwt", {
        session: false,
      }),
      permissionCheckMiddleware("vehicleManage"),
      vehicleController.deleteVehicleController
    );
  
    // View single vehicle details route
    router.get(
      "/view/singleVehicle",
      limiter,
      jsonParser,
      passport.authenticate("jwt", {
        session: false,
      }),
      permissionCheckMiddleware("vehicleManage"),
      vehicleController.singleVehicleViewController
    );
  
    // Other vehicle-related routes can be added here as needed
  
    return router;
  };
  