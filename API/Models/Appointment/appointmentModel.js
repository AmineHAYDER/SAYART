const mongoose = require('mongoose');


const AppointmentSchema = new mongoose.Schema({

    car:{
        type : mongoose.Schema.ObjectId,
        ref : 'Car',
        required : true,
    },
    garage:{
        type : mongoose.Schema.ObjectId,
        ref : 'Garage',
    },
    service:{
        type : mongoose.Schema.ObjectId,
        ref : 'Service',
        required : true,
    },
    date:{
        type : Date ,
        required : true,
    },
    state:{
        type : String,
        enum : ['AppointmentRequest','AppointmentGarageRequest','Confirmed','Done',''],
        default : "AppointmentRequest"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

AppointmentSchema.virtual('garages', {
    ref: 'Garage',
    localField: 'garage',
    foreignField: '_id',
    justOne: true

});
AppointmentSchema.virtual('cars', {
    ref: 'Car',
    localField: 'Car',
    foreignField: '_id',
    justOne: true
});
AppointmentSchema.virtual('services', {
    ref: 'Service',
    localField: 'service',
    foreignField: '_id',
    justOne: true

});
module.exports = mongoose.model('Appointment', AppointmentSchema);