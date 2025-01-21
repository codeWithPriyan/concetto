const express = require("express");

const generateRoute = express();
const { generateExcel } = require("../controllers/excelGenerate");

generateRoute.post("/generate-sheet", generateExcel);

module.exports = generateRoute;
