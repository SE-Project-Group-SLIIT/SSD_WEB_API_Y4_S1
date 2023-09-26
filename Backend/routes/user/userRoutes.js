module.exports = function (router, passport) {
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
    const userController = require('../../controllers/userController');

    //get all company details
    router.get('/save_user_details', jsonParser,
        // passport.authenticate('jwt', {
        // 	session: false
        // }),
        userController.addUserDetails
    );

};