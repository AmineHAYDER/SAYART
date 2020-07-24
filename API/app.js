const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const errorHandler = require('./middelware/errorHandler');
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const client = require('socket.io').listen(4000).sockets;
//model
const appointmentModel = require('./Models/Appointment/appointmentModel')
const serviceModel = require('./Models/Service/serviceModel')
const carModel = require('./Models/Car/carModel')
//routes
var users = require('./Models/User/userRoutes');
var garages = require('./Models/Garage/garageRoute');
var services = require('./Models/Service/serviceRoute')
var appointments = require('./Models/Appointment/appointmentRoute')
var articles = require('./Models/Article/articleRoute')
var filters = require('./Models/Article/Filter/filterRoute')
var oils = require('./Models/Article/Oil/oilRoute')
var wheels = require('./Models/Article/Wheel/wheelRoute')
var stocks = require('./Models/Stock/stockRoute')


// Load env vars
dotenv.config({path: './config/config.env'});

//cookie auth
const app = express();


app.use(mongoSanitize());
app.use(cookieParser());
connectDB();
app.listen(5000, () => {
    console.log('Server started and listening on port :'.blue, 5000)
    client.on('connection', function (socket) {

        // Create function to send status
        sendStatus = function (s) {
            socket.emit('status', s);
        }

        socket.on('NewAppointmentCreated', async function (data) {
            console.log(data.garage)
            await serviceModel.findById(data.service).then((service) =>
                data.service = service
            )
            await carModel.findById(data.car).then((car) => {
                    data.car = car
                    client.emit(data.garage, data)
                }
            )

            sendStatus({
                message: 'Message sent',
                clear: true
            });

        });
    })
});


app.use('/user', users);

app.use('/garage', garages);

app.use('/service', services);

app.use('/appointment', appointments);

app.use('/article', articles);

app.use('/filter', filters);

app.use('/oil', oils);

app.use('/stock', stocks);

app.use('/wheel', wheels);


app.use(errorHandler);
app.use('/', (req, res) => {
    res.send('home page')
});

