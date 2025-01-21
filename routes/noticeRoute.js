const express = require("express");
const bodyParser = require("body-parser");

const { getNotice, postNotice } = require("../controllers/notice");

const noticeRoute = express();

noticeRoute.use(express.json());
noticeRoute.use(bodyParser.urlencoded({ extended: true }));

noticeRoute.get("/notices", getNotice);
noticeRoute.post("/addNotice", postNotice);

module.exports = noticeRoute;