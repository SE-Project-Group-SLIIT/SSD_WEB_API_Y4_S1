var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var employeeRoutes = require("./routes/employee/employeeMain");


router.use("/user", userRoutes);
router.use("/employee", employeeRoutes);

module.exports = router;
