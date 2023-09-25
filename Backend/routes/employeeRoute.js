const router = require("express").Router();
const { Router } = require("express");
const employeeController = require("../controllers/employeeController");

router.route("/").post((req,res) => {
    const response = employeeController.addEventController(
         req.body,
         res
        )
});