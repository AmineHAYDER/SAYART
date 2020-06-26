const mongoose = require('mongoose');


const StockSchema = new mongoose.Schema({
        garage: {
            type: mongoose.Schema.ObjectId,
            ref: 'Garage',
            required: true
        },
        article: {
            type: mongoose.Schema.ObjectId,
            ref: 'Article',
        },
        oil: {
            type: mongoose.Schema.ObjectId,
            ref: 'Oil',
        },
        filter: {
            type: mongoose.Schema.ObjectId,
            ref: 'Filter',
        },
        wheel: {
            type: mongoose.Schema.ObjectId,
            ref: 'Wheel',
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number
        },
        photo: {
            type: String,
            default: 'no-photo.jpg'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
    , {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

StockSchema.virtual('oils', {
    ref: 'Oil',
    localField: 'oil',
    foreignField: '_id',
    justOne: true

});
StockSchema.virtual('oilDetail', {
    ref: 'Oil',
    localField: 'oil',
    foreignField: '_id',

});
StockSchema.virtual('wheelDetail', {
    ref: 'Wheel',
    localField: 'wheel',
    foreignField: '_id',

});
StockSchema.virtual('filterDetail', {
    ref: 'Filter',
    localField: 'filter',
    foreignField: '_id',

});
module.exports = mongoose.model('Stock', StockSchema);