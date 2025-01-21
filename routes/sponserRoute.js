const express = require("express");
const bodyParser = require("body-parser");

const { getSponsor, postSponsor } = require('../controllers/sponsor');


const sponserRoute = express();

sponserRoute.use(express.json());
sponserRoute.use(bodyParser.urlencoded({ extended: true }));

sponserRoute.get('/sponsor', getSponsor);
sponserRoute.post('/sponsor', postSponsor);

module.exports = sponserRoute;