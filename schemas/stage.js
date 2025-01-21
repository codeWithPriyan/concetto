const mongoose = require("mongoose");

const stageSchema = mongoose.Schema({
    description:{
        type: String,
        required:true
    },  
    venue:{
        type: String,
        required:true
    },
    timing: {       // start date and time
        type: String,
        required:true
    },       
    calenderLink:{          // google calendar link
        type: String,
        required:true
    }  
});

module.exports = mongoose.model("stage", stageSchema);