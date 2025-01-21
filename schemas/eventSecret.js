const mongoose = require("mongoose");

const eventSecretSchema = mongoose.Schema({
    eventName: String,
    key: String,
    secret: String
});

module.exports = mongoose.model('eventSecret', eventSecretSchema);