module.exports = function (router, passport) {
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
    const userController = require('../../controllers/userController');
    const validationsMiddleware = require('../../validators/commonValidatorsjoi');
    const userValidationSchema = require('../../validators/validationJoiSchemas/userValidationSchema');

    //add user details
    router.post('/save_user_details', jsonParser,
        validationsMiddleware(userValidationSchema.saveUserDetails, 'body'),
        // passport.authenticate('jwt', {
        // 	session: false
        // }),
        userController.addUserDetails
    );

    //add user details
    router.post('/signin', jsonParser,
        validationsMiddleware(userValidationSchema.signInDetails, 'body'),
        userController.signin
    );

};