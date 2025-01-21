const ExpressError = require("../utils/expressError");

const checkPersonalEmail = (req, res, next) => {
  const { email } = req.body;
  if (email.endsWith("iitism.ac.in")) {
    return new ExpressError("Try with personal email !", 400);
  } else {
    return next();
  }
};

module.exports = checkPersonalEmail;
