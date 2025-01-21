const Purchase = require("../schemas/purchase");
const sendMail = require("../mailsender");

exports.postTshirt = async (req, res) => {
  try {
    // console.log(req.file);

    const {
      orderID,
      name,
      admissionNumber,
      mobileNumber,
      branch,
      tshirtSize,
      transactionID,
      hostel,
      roomNumber,
      email,
    } = req.body;

    const resp = await Purchase.findOne({ orderID });
    if (resp) {
      console.log("repeated transaction id");
      return res.status(400).send({ msg: "Transaction already recorded !" });
    }

    const { path: imageURL } = req.file;
    const newPurchase = new Purchase({
      orderID,
      name,
      admissionNumber,
      mobileNumber,
      branch,
      transactionID,
      tshirtSize,
      hostel,
      roomNumber,
      imageURL,
      email,
    });
    const data = await newPurchase.save();
    // console.log(data);
    

    const mailObj = {
      to_mail: email,
      name,
      admn_no: admissionNumber,
      trans_id: transactionID,
      _id: data._id,
      date: data.createdAt,
      size: tshirtSize,
    };
    // console.log(mailObj);
    await sendMail(mailObj);
    return res
      .status(200)
      .send({
        msg: "Your order has been confirmed successfully! Please check your email for the receipt.",
      });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};

exports.renderTshirt = (req, res) => {
  //wait;
  //render tshirt form
};
