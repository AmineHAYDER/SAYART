const express = require('express');
const router = express.Router({mergeParams:true});
const garageController = require('./garageController');

router.use(express.json());

router.route('/')
    .get(garageController.all);

router.post(
    '/create',
    garageController.store
);
router.get(
    '/:id' ,
    garageController.get
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