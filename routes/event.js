const express = require("express");
const bodyParser = require("body-parser");

const { getEvents ,getSingleEvent} = require("../controllers/event");

const getEventRoute = express();

getEventRoute.use(express.json());
getEventRoute.use(bodyParser.urlencoded({ extended: true }));

getEventRoute.get("/showAllEvents", getEvents);
getEventRoute.get("/showEvents/:id",getSingleEvent)

module.exports = getEventRoute;