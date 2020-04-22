const mongoose = require('mongoose');
const geocoder = require('../../utils/geocoder');

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
        formattedAddress:{
            type: String,
            required: [true, 'please add an address']
        },
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
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
    ratings: {
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
GarageSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(this.address.formattedAddress);
    this.location = {
        type: 'Point',
        coordinates: [this.address.lng, this.address.lat],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode
    };

    // Do not save address in DB
    this.address = undefined;
    next();
});
module.exports = mongoose.model('Garage', GarageSchema);