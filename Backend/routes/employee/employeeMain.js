var express = require("express");
var router = express.Router();
var passport = require("passport");

require("../../config/passport")(passport);

require("./employeeRoutes")(router, passport);

module.exports = router;
