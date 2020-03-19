const mongoose = require('mongoose');


const garageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'please add a name'],
        trim: true,
    },
    phone: {
        type: String,
        maxlength: 8
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "please verify your email"]
    },
    address: {
        type: String,
        required: [true, 'please add an address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],

        },
        coordinates: {
            type: [Number],

            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    services: {
        type: [String],
        required: true,
        enum: [
            'vidange', 'lavage', '3jeli', 'repair', 'other'
        ]
    },
    averageRating: {
        type: Number,
        min: 0,
        max: 5
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('garage', garageSchema);