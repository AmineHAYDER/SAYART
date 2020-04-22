const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true,
    },
    garage:{
        type : mongoose.Schema.ObjectId,
        ref : 'Garage',
        required: true
    },
    duration:{
        type : Number ,
        default : 30,
    },
    price:{
        type : Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Service', ServiceSchema);