const express = require('express');
const router = express.Router();
const userController = require('./userController');
const garageRouter = require('../Garage/garageRoute');
const advancedResults = require('../../middelware/advancedResults')
const user= require('./userModel');

const cors = require('cors');
const { protect, authorize } = require('../../middelware/auth');


router.use(express.json());
router.use(cors());


router.use('/:userId/garage', garageRouter);

router.route('/')
      .get(advancedResults(user, 'garages'),userController.all);

router.post('/login',
    userController.login )

router.post(
    '/create' ,
    userController.register
);
router.get(
    '/:id' ,
    userController.get
);
router.put(
    '/:id' ,
    userController.put
);
router.route('/:id')
    .delete(
        protect   ,
    userController.delete
);


module.exports = router ;