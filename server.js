// PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
const ExpressError = require("./utils/expressError");
require("dotenv").config();

// ROUTES INPORT
const sponserRoute = require("./routes/sponserRoute");
const purchaseRoute = require("./routes/purchaseRoute");
const keySecretRoute = require("./routes/keySecretRoute");
const eventRegitrationRoute = require("./routes/eventRegistrationRoute");
const teamEventRegistrationRoute = require("./routes/teamEventRegistrationRoute");
const noticeRoute = require("./routes/noticeRoute");
const fcmTokenRoute = require("./routes/fcmTokenRoute");
const getEventRoute = require("./routes/event");
const getTeamsRoute = require("./routes/getTeams");
const markRoute = require("./routes/markRoute");
const accomodation = require("./routes/accomodation.js");
const excelGenerate = require("./routes/excelGenerate.js");

const app = express();

// CONFIGURATIONS
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.urlencoded({extended: true})) // to parse the req.post body

// DATABASE CONNECTION
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/Concetto";

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));
const PORT = process.env.PORT || 8000;

//ROUTES DEBUG
app.use("*", (req, res, next) => {
  console.log(chalk.red(req.method), chalk.blue(req.baseUrl));
  next();
});

// ROUTES
app.use("/api", sponserRoute);
app.use("/api", purchaseRoute);
app.use("/api", keySecretRoute);
app.use("/api", eventRegitrationRoute);
app.use("/api", teamEventRegistrationRoute);
app.use("/api", getEventRoute);
app.use("/api", noticeRoute);
app.use("/api", fcmTokenRoute);
app.use("/api", getTeamsRoute);
app.use("/api", markRoute);
app.use("/api", accomodation);
app.use("/api", excelGenerate);

// ERROR HANDLING
app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found !", 404));
});

app.use((err, req, res, next) => {
  console.log(err);
  const { statusCode = 400, message = "Something went wrong" } = err;
  res.status(statusCode).send({ msg: message });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
