const express = require("express");
const bodyParser = require("body-parser");

const { getFcmToken, postFcmToken } = require("../controllers/fcmToken");

const fcmTokenRoute = express();

fcmTokenRoute.use(express.json());
fcmTokenRoute.use(bodyParser.urlencoded({ extended: true }));

fcmTokenRoute.get("/tokens", getFcmToken);
fcmTokenRoute.post("/addToken", postFcmToken);

module.exports = fcmTokenRoute;