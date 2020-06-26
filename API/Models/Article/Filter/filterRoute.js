const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../../middelware/advancedResults')
const { protect, authorize } = require('../../../middelware/auth');

const filter =require('./filterModel')
const FilterController = require('./filterController');
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
    .get(advancedResults(filter), protect, authorize('admin'), FilterController.all);


router
    .route('/:id')
    .put(FilterController.put)
    .delete(FilterController.delete)

router
    .route('/create')
    .get(FilterController.store)


module.exports = router ;