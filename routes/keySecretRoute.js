const express = require("express");
const bodyParser = require("body-parser");

const { getKeySecret } = require('../controllers/secret');

const keySecretRoute = express();

keySecretRoute.use(express.json());
keySecretRoute.use(bodyParser.urlencoded({ extended: true }));

keySecretRoute.get('/getKeySecret', getKeySecret);

module.exports = keySecretRoute;