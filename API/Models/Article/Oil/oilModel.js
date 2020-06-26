const mongoose = require('mongoose');


const OilSchema = new mongoose.Schema({

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
    image: {
        type: String,
    },
    capacity: {
        type: Number
    },
    viscosity: {
        type: String
    },
    Norms: {
        type: [String],
    },
    type: {
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

module.exports = mongoose.model('Oil', OilSchema);