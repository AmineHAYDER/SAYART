const express = require('express');
const router = express.Router();
const userController = require('./userController');
const garageRouter = require('../Garage/garageRoute');


router.use(express.json());

router.use('/:userId/garage', garageRouter);

router.route('/')
      .get(userController.all);

router.post(
    '/create' ,
    userController.store
);
router.get(
    '/:id' ,
    userController.get
);
router.put(
    '/:id' ,
    userController.put
);
router.delete(
    '/:id',
    userController.delete
);


module.exports = router ;