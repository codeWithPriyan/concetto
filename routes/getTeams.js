const express = require("express");
const bodyParser = require("body-parser");

const { getTeams, deleteTeam, adminLogin } = require("../controllers/getTeams");
const verifyAdmin = require("../middlewares/adminVerification");

const getTeamsRoute = express();

getTeamsRoute.use(express.json());
getTeamsRoute.use(bodyParser.urlencoded({ extended: true }));

getTeamsRoute.post("/adminlogin", verifyAdmin, adminLogin)
getTeamsRoute.post("/allTeams", verifyAdmin, getTeams);
getTeamsRoute.post("/deleteTeam/:id", verifyAdmin, deleteTeam);

module.exports = getTeamsRoute;
