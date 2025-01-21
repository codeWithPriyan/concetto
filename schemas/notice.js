const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
    title: String,
    message: String
});

module.exports = mongoose.model("Notice", noticeSchema);