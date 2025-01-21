const accomodationSchema = require("../schemas/accomodation.js");
module.exports.formSubmit = async (req, res) => {
  try {
    const {
      name,
      instituteName,
      contactNo,
      instituteIdNo,
      Event,
      RegistrationSlabs3,
      RegistrationSlabs1,
      size,
      arrivalDate,
      departureDate,
      Amount,
      TransactionId,
    } = req.body;
    const data = new accomodationSchema({
      name,
      instituteIdNo,
      contactNo,
      instituteName,
      Event,
      RegistrationSlabs1,
      RegistrationSlabs3,
      size,
      arrivalDate,
      departureDate,
      Amount,
      TransactionId,
      instituteIdPhoto: req.files[0].path,
      paymentReceipt: req.files[0].path,
    });
    // console.log(userData);
    await data.save();
    res.status(200).json({ message: "Accomodation Booked successfully." });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
