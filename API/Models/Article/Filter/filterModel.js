const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    ref: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    characteristics: {
        type: [JSON]
    },
    compatibility: {
        type: [JSON]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Article', ArticleSchema);