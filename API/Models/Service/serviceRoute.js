const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults')
const { protect, authorize } = require('../../middelware/auth');

const service =require('./serviceModel')
const ServiceController = require('./ServiceController');
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
    .get(advancedResults(service), protect, authorize('admin'), ServiceController.all);

router.route('/garage/:distance')
    .post(ServiceController.getGaragesInRadius);

router
    .route('/:id')
    .get(ServiceController.get)
    .put(ServiceController.put)
    .delete(ServiceController.delete)

router
    .route('/create')
    .post(ServiceController.store)


module.exports = router ;