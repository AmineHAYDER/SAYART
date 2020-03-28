const express = require('express');
const router = express.Router();

const userController = require('./userController');

const authRouter = require('../Auth/authRoutes');
const garageRouter = require('../Garage/garageRoute');


const advancedResults = require('../../middelware/advancedResults')
const user= require('./userModel');
const cors = require('cors');
const { protect, authorize } = require('../../middelware/auth');
const corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.use(express.json());
router.use(cors(corsOptions));

router.use('/auth', authRouter);


router.use('/:userId/garage', protect, authorize('garage','admin'), garageRouter);


router
    .route('/')
    .get(advancedResults(user, 'garages'), protect, authorize('garage','admin'), userController.all);

router
    .get( '/:id', userController.get);

router
    .put( '/:id', userController.put);

router
    .route('/:id')
    .delete(protect, authorize('admin'), userController.delete);


module.exports = router ;