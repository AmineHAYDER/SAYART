const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
        //GeoJSON Point
                type : {
                    type: String,
                    enum:['point'],
                    //required: true ,
                },
                coordinates: {
                    type:[Number],
                   // required: true,
                    index: '2dsphere'
                },
                formattedAddress:String,
                street: String,
                city: String,
                state: String,
                zipCode: String,
                country: String,
    },
    createdAt: {
        type:Date ,
        default: Date.now ,
    }
});

module.exports = mongoose.model('user', userSchema);