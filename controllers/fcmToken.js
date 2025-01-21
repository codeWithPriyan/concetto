const fcmToken = require("../schemas/fcmToken");

exports.getFcmToken = async (req, res) => {
    try {
        const Alldata = await fcmToken.find({});
        //console.log(Alldata);
        var tokens = [];
        for (var i = 0; i < Alldata.length;i++) {
            tokens.push(Alldata[i].token);
        }
        res.status(200).send(tokens);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

exports.postFcmToken = async (req, res) => {
   try {
       console.log(req.body);
        const { token} = req.body;
        const newFcmToken = new fcmToken({
            token
        });
       await newFcmToken.save();
       //console.log(data);
       
        //console.log("new Notice", newNotice);
        res.status(200).json({ message: "Token added successfully" });

    } catch (e) {
        res.status(400).send({ message: e.message });
    }
}