var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var employeeRoutes = require("./routes/employee/employeeMain");
var rentalRoutes = require("./routes/rental/rentalMain");


router.use("/user", userRoutes);
router.use("/employee", employeeRoutes);
router.use("/rental", rentalRoutes);

module.exports = router;
