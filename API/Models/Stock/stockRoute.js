const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults')
const errorHandler = require('../../middelware/errorHandler')
const { protect, authorize } = require('../../middelware/auth');
const stock = require('./stockModel')
const stockController = require('./stockController');
//cors
const cors = require('cors');

const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(express.json());
router.use(errorHandler);
router.use(cors(corsOptions));



 router.route('/all')
      .get(stockController.all);

router
    .route('/')
    .get(protect,stockController.get)
    .put(protect,stockController.put)
    .delete(stockController.delete)

router
    .route('/wheel')
    .get(protect,authorize('garage','admin'),stockController.getMyWheels)

router
    .route('/create')
    .post(protect,authorize('garage','admin'),stockController.store)
module.exports = router ;