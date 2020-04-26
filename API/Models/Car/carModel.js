const mongoose = require('mongoose');


const CarSchema = new mongoose.Schema({
    vehicleIdentificationNumber: {
        type: String,
        unique: true,
        trim: true,
        maxlength: [50, 'vehicleIdentificationNumber can not be more than 50 characters']
    },
    status: {
        type: String,
        enum: ['clean','warning','urgent'],
    },
    mark: {
        type: String,
        required: [true, 'please add an mark']
    },
    model: {
        type: String,
        required: [true, 'please add an model']
    },
    version: {
        type: String
    },
    fuel: {
        type: String,
        enum: ['Super sans plomb','Gasoil super','Gasoil']
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    mileage: {
        value :{
            type: String,
            default :""
        },
        date: Date
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

module.exports = mongoose.model('Car', CarSchema);