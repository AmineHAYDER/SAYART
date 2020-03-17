var dbConnection = require('./dbConnection.js');
var users = require('./Modules/User/userRoutes');
const express = require('express');
const errorHandler = require('./middelware/errorHandler');
const colors = require('colors');
const app = express();


dbConnection.connect();
app.listen(5000 , () => console.log('Server started and listening on port :'.blue,5000) );


app.use('/user',users);

app.use(errorHandler);
app.use('/',(req,res)=>{res.send('home page')});
