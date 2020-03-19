const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorHandler = require('./middelware/errorHandler');
//routes
var users = require('./Modules/User/userRoutes');
var garages = require('./Modules/Garage/garageRoute');

// Load env vars
dotenv.config({ path: './config/config.env' });




const app = express();


connectDB();
app.listen(5000 , () => console.log('Server started and listening on port :'.blue,5000) );


app.use('/user',users);

app.use(errorHandler);
app.use('/',(req,res)=>{res.send('home page')});
