const express = require("express");
const patientRouter = express.Router();
const auth = require("../middlewares/auth")
const { searchStudent } = require("../controllers/studentDataController")

patientRouter.post("/search", searchStudent)

module.exports = patientRouter;