const express = require('express');
const router = express.Router({mergeParams:true});
const garageController = require('./garageController');
//cors
const cors = require('cors');

const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};




router.use(express.json());
router.use(cors(corsOptions));

router.route('/decode/reverser')
      .post(garageController.decode);


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