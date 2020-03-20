const mongoose = require('mongoose');


const GarageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'name can not be more than 50 characters']
    },
    slug: String,
    phone: {
        type: String,
        maxlength: 8
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
            'oilChange', 'washing', 'wheels', 'electronic', 'lights'
        ]
    },
    status:{
         type: String,
         enum : [
             'Up', 'Down'
         ]
    },
    Ratings: {
        service: {
            type: Number,
            min: 0,
            max: 5
        },
        greeting: {
            type: Number,
            min: 0,
            max: 5
        },
        timing: {
            type: Number,
            min: 0,
            max: 5
        },
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user:{
        type : mongoose.Schema.ObjectId,
        ref : 'User',
    }
});

module.exports = mongoose.model('Garage', GarageSchema);