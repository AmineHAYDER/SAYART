const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults')
const garageController = require('./garageController');
const garage = require('./garageModel')
const { protect, authorize } = require('../../middelware/auth');
//cors
const cors = require('cors');

const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};




router.use(express.json());
router.use(cors(corsOptions));

//decode address for user
router.route('/decode/reverser')
    .post(garageController.decode);

router
    .route('/recommended')
    .get(protect, authorize('admin','user'), garageController.getRecommendedGarages);


router
    .route('/all')
    .get(advancedResults(garage), protect, authorize('admin'), garageController.all);


router.post(
    '/create',
    garageController.store
);

router.get(
    '/myGarage' ,protect,
    garageController.myGarage
);
router.put(
    '/:id' ,
    garageController.put
);
router.delete(
    '/:id',
    garageController.delete
);


module.exports = router ;