const mongoose = require("mongoose");

const accomodation = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instituteName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  instituteIdNo: {
    type: String,
    // required :true
  },
  instituteIdPhoto: {
    type: String,
    // required :true
  },
  Event: [
    {
      type: String,
      // required :true
    },
  ],
  RegistrationSlabs3: {
    type: String,
    // required :true
  },
  RegistrationSlabs1: {
    type: String,
    // required :true
  },
  size: {
    type: String,
    // required :true
  },
  arrivalDate: {
    type: String,
    // required :true
  },
  departureDate: {
    type: String,
    // required :true
  },
  Amount: {
    type: String,
    // required :true
  },
  TransactionId: {
    type: String,
    // required :true
  },
  paymentReceipt: {
    type: String,
    // required :true
  },
});

module.exports = mongoose.model("accomodation", accomodation);
