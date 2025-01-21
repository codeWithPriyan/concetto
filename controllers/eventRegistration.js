const Event = require("../schemas/event");
const EventField = require("../schemas/eventRegistration");

exports.getEventRegistration = async (req, res) => {
    try {
        const eventID = req.params.id;
        const event = await Event.findById(eventID);
        const eventField = await EventField.findOne({ eventName: event.name });
        //console.log(event);
        if (event == null) {
            res.status(400).send({ meassage: "Event does not exits!" });
        }else res.status(200).send(eventField);
    } catch (e) {
        res.status(400).send({ message: e.message });
        return  res.status(500).send("Server Error") ;
    }
}

exports.postAllEvent = async (req, res) => {
    try {
        //console.log(req.body);
        const newEventField = new EventField(
            req.body
        );
        newEventField.fieldOfInterest = true;
        await newEventField.save();
        res.status(200).json({ message: "Event Saved successfully." });
    } catch (e) {
        return res.status(400).send({ msg: e.message });
    }
};



