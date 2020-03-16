var dbConnection = require('./dbConnection.js');
var Server = require('./server.js');
var users = require('./Modules/User/userRoutes');
const express = require('express');
const app = express();



Server.startServer(5000);
dbConnection.connect();

app.listen(5000 , () => console.log('Server started and listening on port :',5000) );
app.use('/user',users);
