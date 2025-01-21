const mongoose = require("mongoose");

const extraDetailsSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: [String],
        required:true
    }
});

module.exports = mongoose.model("extraDetails", extraDetailsSchema);