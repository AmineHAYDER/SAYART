const express = require('express');
const router = express.Router();

// preventing sqlInjection and other sec
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const xssClean = require('xss-clean')


const userController = require('./userController');

const authRouter = require('../Auth/authRoutes');
const garageRouter = require('../Garage/garageRoute');


const advancedResults = require('../../middelware/advancedResults')
const user = require('./userModel.js');
const cors = require('cors');
const { protect, authorize } = require('../../middelware/auth');
const corsOptions = {
    origin: 'http://127.0.0.1:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.use(express.json());
router.use(cors(corsOptions));
router.use(mongoSanitize());
router.use(helmet());
router.use(xssClean());




router.use('/auth', authRouter);
router.use('/:userId/garage', protect, authorize('garage', 'admin'), garageRouter);


router
    .route('/')
    .get(advancedResults(user, 'garages'), protect, authorize('garage', 'admin'), userController.all);

router
    .route('/:id')
    .get(userController.get)
    .put(userController.put)
    .delete(userController.delete);



module.exports = router;