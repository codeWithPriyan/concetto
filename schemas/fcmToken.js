const mongoose = require('mongoose');

const fcmSchema = mongoose.Schema({
    token:String
});

module.exports = mongoose.model("FCMtoken", fcmSchema);