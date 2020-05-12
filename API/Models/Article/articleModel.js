const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true,
    },
    ref:{
        type : String,
        required: true
    },
    image:{
        type : String ,
    },
    price:{
        type : Number,
    },
    quantity:{
        type : Number,
    },
    compatibility:{
      type:[String]
    },
    garage:{
        type : mongoose.Schema.ObjectId,
        ref : 'Garage',
        required: true
    },
    service:{
        type : mongoose.Schema.ObjectId,
        ref : 'Service',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Article', ArticleSchema);