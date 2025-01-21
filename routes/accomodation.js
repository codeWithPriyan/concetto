const express = require("express");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const router = express.Router();
const accomodation = require("../controllers/accomodation.js");

router.post("/accomodation", upload.array("image", 2), accomodation.formSubmit);

module.exports = router;
