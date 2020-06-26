const mongoose = require('mongoose');


const WheelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique:true
    },
    reference: {
        type: String,
        required: true,
        unique:true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    diameter: {
        type: Number
    },
    load: {
        type: Number,
    },
    speed: {
        type: String
    },
    manufacture: {
        type: String
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Wheel', WheelSchema);