const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventFieldSchema = mongoose.Schema({
        teamName: {
            type: Boolean,
            default : true,
        },
        teamLeader: {
            type: Boolean,
            default : true,
        },
        eventName: {
            type: String,
            default : true,
        },
        members: {
            type: Boolean,
            default:true
        },
        problemStatement: {
            type: Boolean,
            default: true
        },
        fieldOfInterest: {
            type: Boolean,
            defult: true,
            required: true
        },
        botWeight: {
            type: Boolean,
            default: true
        },
        driveLink: {
            type: Boolean,
            default: true
        },
        
});

const EventField = mongoose.model("eventField", eventFieldSchema);
module.exports = EventField