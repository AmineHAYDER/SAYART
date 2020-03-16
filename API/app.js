var dbConnection = require('./dbConnection.js');
var users = require('./Modules/User/userRoutes');
const express = require('express');
const app = express();


dbConnection.connect();

app.listen(5000 , () => console.log('Server started and listening on port :',5000) );
app.use('/user',users);
app.use(express.json());
app.use('/',(req,res)=>{res.send('home page')});
