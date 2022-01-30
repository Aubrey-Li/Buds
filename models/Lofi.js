const mongoose = require('mongoose');

const lofiSchema = new mongoose.Schema({
    music: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    
}, {});

module.exports = mongoose.model("Lofi", lofiSchema)