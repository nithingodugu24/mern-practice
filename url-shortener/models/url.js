const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timeStamp : {type: Number,},
        ipAddress : {type: String},
        userAgent: {type: String},
    }],
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        refs: 'usersd',
    }

}, {timestamps: true})

const URL = mongoose.model('url', urlSchema);

module.exports = URL;