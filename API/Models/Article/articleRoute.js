const express = require('express');
const router = express.Router({mergeParams:true});
//cors
const cors = require('cors');
const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// routes
const filters = require('./Filter/filterRoute')
router.use(express.json());
router.use(cors(corsOptions));




router.use('/filter', filters);

module.exports = router ;