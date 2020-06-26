const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../../middelware/advancedResults')
const { protect, authorize } = require('../../../middelware/auth');

const wheel =require('./wheelModel')
const WheelController = require('./wheelController');
//cors
const cors = require('cors');
const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(express.json());
router.use(cors(corsOptions));



router
    .route('/all')
    .get(advancedResults(wheel), protect, authorize('admin'), WheelController.all);


router
    .route('/:id')
    .put(WheelController.put)
    .delete(WheelController.delete)

router
    .route('/create')
    .get(WheelController.store)


module.exports = router ;