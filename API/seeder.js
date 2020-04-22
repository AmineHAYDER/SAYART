const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const user = require('./Models/User/userModel');
const garage = require('./Models/Garage/garageModel');
const service = require('./Models/Service/serviceModel');
const car = require('./Models/Car/carModel');
const appointment = require('./Models/Appointment/appointmentModel');



// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);
const garages = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/garages.json`, 'utf-8')
);
const services = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/services.json`, 'utf-8')
);
const cars = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/cars.json`, 'utf-8')
);
const appointments = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/appointments.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
  try {
    await user.create(users);
    await garage.create(garages);
    await service.create(services);
    await car.create(cars);
    await appointment.create(appointments);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await user.deleteMany();
    await garage.deleteMany();
    await service.deleteMany();
    await car.deleteMany();
    await appointment.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};
const refreshData = async () => {
  try {
    await user.deleteMany();
    await garage.deleteMany();
    await service.deleteMany();
    await car.deleteMany();
    await appointment.deleteMany();
    await user.create(users);
    await garage.create(garages);
    await service.create(services);
    await car.create(cars);
    await appointment.create(appointments);

    console.log('Data Refreshed...'.blue.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else if (process.argv[2] === '-r') {
  refreshData();
}