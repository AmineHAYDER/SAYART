const mongoose = require('mongoose');


const FilterSchema = new mongoose.Schema({

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
    type: {
        type: String,
        enum:['air','oil','fuel']
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    length: {
        type: Number,
    },
    outerDiameter: {
        type: Number
    },
    innerDiameter: {
        type: Number,
    },
    threadSize: {
        type: Number,
    },
    manufacture: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Filter', FilterSchema);