const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults')
const errorHandler = require('../../middelware/errorHandler')
const { protect, authorize } = require('../../middelware/auth');
const car = require('./carModel')
const carController = require('./carController');
//cors
const cors = require('cors');

const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(express.json());
router.use(errorHandler);
router.use(cors(corsOptions));



// router.route('/all')
//       .get(advancedResults(car),carController.all);

router
    .route('/')
    .get(protect,carController.get)
    .post(protect,authorize('user','admin'),carController.store)
    .put(protect,carController.put)
    .delete(carController.delete)


module.exports = router ;