const EventSecret = require("../schemas/eventSecret");

const verifyAdmin = async (req, res, next) => {
  const { id, password, eventName } = req.body;
  if (!id || !password || !eventName) {
    return res
      .status(400)
      .send({ msg: "Please enter id, password and event !" });
  }

  const reqAdmin = await EventSecret.findOne({ eventName });

  if (!reqAdmin || reqAdmin.key !== id || reqAdmin.secret !== password) {
    return res.status(400).send({ msg: "User Unauthorized !" });
  } else {
    return next();
  }
};

module.exports = verifyAdmin;
