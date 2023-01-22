const mongoose = require("mongoose");


const videoModel = mongoose.model('Videos', {
    title: {
        required: true,
        unique: true,
        type: String,
    },
    description: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    views : {
        type: String,
    },
    time: {
        type: String,
    },
});

module.exports = videoModel;