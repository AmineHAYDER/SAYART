const mongoose = require('mongoose');
const slugify = require('slugify');
const geocoder = require('../../utils/geocoder');

const UserSchema = mongoose.Schema({
    login: {
               type: String,
               required: [true,'please add a login'],
               unique : true,
               trim :true,
               maxlength:[20,'login can\'t not be more than  20 characters']
           },
    name: {
               type: String,
               required: [true,'please add a login'],
               trim :true,
               maxlength:[12,'name can\'t not be more than  12 characters']
           },
    slug:String,

    lastName: {
               type: String,
               required: [true,'please add a lastname'],
               trim :true,
               maxlength:[12,'lastname can\'t not be more than  12 characters']
              },
    address: {
               type: String,
               required: [true,'please add an address'],
              },
    image: {
               type: String,
               required: [true,'please add an image'],
               default:'no-photo.jpg',
               match:[/[a-zA-Z0-9]*.jpg/,'url image is not valid ']
           },
    number: {
               type: String,
               required: [true,'please add a number'],
               maxlength:[20,'number can\'t not be more than  12 characters']
           },
    email: {
               type: String,
               unique : true,
               required: [true,'please add an email'],
               match:[
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                     'email is not valid '
                     ]
          },
    password: {
               type: String,
               required: [true,'please add a password']
              },
    isGarage: {
               type: Boolean,
               required: true
    },
    rib: {
               type: String,
               required: true
         },
    location: {
                type : {
                    type: String,
                    enum:['Point']
                },
                coordinates: {
                    type:[Number],
                    index: '2dsphere'
                },
                formattedAddress:String,
                street: String,
                city: String,
                state: String,
                zipcode: String,
                country: String,
    },
    createdAt: {
        type:Date ,
        default: Date.now ,
    }
},{
    toJSON:{virtuals : true},
    toObject:{virtuals : true}

});

//Create Users slug from name
UserSchema.pre('save',function(){

        this.slug = slugify( this.name,{lower:true})
        next();

});
// Geocode Create location field
UserSchema.pre('save',async function (next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
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

UserSchema.virtual('garages',{
    ref:'Garage',
    localField: '_id',
    foreignField: 'user',
    justOne: false

});


module.exports = mongoose.model('User', UserSchema);