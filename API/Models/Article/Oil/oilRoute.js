const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../../middelware/advancedResults')
const { protect, authorize } = require('../../../middelware/auth');

const oil =require('./oilModel')
const oilController = require('./oilController');
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
    .get(advancedResults(oil), protect, authorize('admin'), oilController.all);


router
    .route('/:id')
    .put(oilController.put)
    .delete(oilController.delete)

router
    .route('/create')
    .post(oilController.store)


module.exports = router ;