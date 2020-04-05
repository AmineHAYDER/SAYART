const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorHandler = require('./middelware/errorHandler');
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')

//routes
var users = require('./Models/User/userRoutes');
var garages = require('./Models/Garage/garageRoute');

// Load env vars
dotenv.config({ path: './config/config.env' });

//cookie auth
const app = express();



app.use(mongoSanitize());
app.use(cookieParser());
connectDB();
app.listen(5000 , () => console.log('Server started and listening on port :'.blue,5000) );


app.use('/user',users);

app.use('/garage',garages);




app.use(errorHandler);
app.use('/',(req,res)=>{res.send('home page')});

