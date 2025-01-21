const event = require("../schemas/event");

exports.getEvents = async (req, res) => {
    const allEvents = await event.find({});
    res.status(200).send(allEvents);
};

exports.getSingleEvent = async (req, res) => {
    const eventId = req.params.id;
    //console.log(eventName);
    const singleEvent = await event.find({ _id: eventId })
    if (singleEvent.length == 0) {
        res.status(400).send({ message: "Event does not exists!" });
    }else res.status(200).send(singleEvent)
};
