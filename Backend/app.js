var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var employeeRoutes = require("./routes/employee/employeeMain");
var vehicleRoutes = require("./routes/vehicle/vehicleMain")


router.use("/user", userRoutes);
router.use("/employee", employeeRoutes);
router.use("/vehicle", vehicleRoutes);

module.exports = router;
