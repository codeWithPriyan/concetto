const express = require("express");
const bodyParser = require("body-parser");
const { markAttendanceAndStage } = require("../controllers/mark");
const verifyAdmin = require("../middlewares/adminVerification");

const markRoute = express();

markRoute.use(express.json());
markRoute.use(bodyParser.urlencoded({ extended: true }));

markRoute.post("/mark", verifyAdmin, markAttendanceAndStage);
module.exports = markRoute;
