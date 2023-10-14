const { viewAllRentalDetails } = require("../../services/rentalService");

module.exports = function(router, passport){
    var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
    const rentalController = require("../../controllers/rentalController");
    const validationsMiddleware = require("../../validators/commonValidatorsjoi");
    const rentalValidationSchema = require("../../validators/validationJoiSchemas/rentalValidationSchema");

    //add rental details route
    router.post(
        "/save_rental_details",
        jsonParser,
        validationsMiddleware(
            rentalValidationSchema.saveRentalDetails,
            "body",
        ),
        passport.authenticate("jwt", {
			session: false,
		}),
        rentalController.addRentalcontroller,
    );

    // View all rental routes
    router.get(
        "/view-all",
        jsonParser,
        passport.authenticate("jwt", {
			session: false,
		}),
        rentalController.viewallRentalCntroller,
    );

    // Update rental routes
    router.put(
        "/update_rental",
        jsonParser,
        passport.authenticate("jwt", {
			session: false,
		}),
        rentalController.updateRentalcontroller,
    )

    // Delete rental routes
    router.put(
        "/delete_rental",
        jsonParser,
        passport.authenticate("jwt", {
			session: false,
		}),
        rentalController.deleteRentalController,
    );

    //Single Rental View details Routes
    router.get(
        "/view/single_rental",
        jsonParser,
        passport.authenticate("jwt", {
			session: false,
		}),
        rentalController.singleRentalViewController,
    );
};