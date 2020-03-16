const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isGarage: { type: String, required: true },
    rib: { type: String, required: true },
});

module.exports = mongoose.model('user', userSchema);