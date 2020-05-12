const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults')
const { protect, authorize } = require('../../middelware/auth');

const article =require('./articleModel')
const ArticleController = require('./articleController');
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
    .get(advancedResults(article), protect, authorize('admin'), ArticleController.all);


router
    .route('/:id')
    .put(ArticleController.put)
    .delete(ArticleController.delete)

router
    .route('/create')
    .post(ArticleController.store)


module.exports = router ;