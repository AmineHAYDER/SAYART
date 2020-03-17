const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.use(express.json());

router.get(
    '/' ,
    userController.all
);
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