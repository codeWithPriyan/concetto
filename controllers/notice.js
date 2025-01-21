const Notice = require("../schemas/notice");

exports.getNotice = async (req, res) => {
    try {
        const allNotice = await Notice.find({});
        res.status(200).send(allNotice);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

exports.postNotice = async (req, res) => {
   try {
        //console.log(req.body);
        const { title, message } = req.body;
        const newNotice = new Notice({
            title,
            message
        });
       await newNotice.save();
        //console.log("new Notice", newNotice);
        res.status(200).json({ message: "Notice added successfully" });

    } catch (e) {
        res.status(400).send({ message: e.message });
    }
}