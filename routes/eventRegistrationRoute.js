const express = require("express");
const bodyParser = require("body-parser");

const { getEventRegistration,postAllEvent} = require("../controllers/eventRegistration");

const eventRegistrationRoute = express();

eventRegistrationRoute.use(express.json());
eventRegistrationRoute.use(bodyParser.urlencoded({ extended: true }));

eventRegistrationRoute.get('/events/:id', getEventRegistration);
eventRegistrationRoute.post('/addEvent', postAllEvent);

module.exports = eventRegistrationRoute;