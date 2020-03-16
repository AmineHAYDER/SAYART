const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get( '/', userController.all );
router.get( '/create', userController.store );
router.get( '/:id',  );
router.post( '/:id',  (req, res)=> {

    res
        .status(200)
        .json({
            success: "True",
            data: `update user :${id}`
        })
});
router.delete( '/:id',  (req, res)=> {

    res
        .status(200)
        .json({
            success: "True",
            data: `delete user :${id}`
        })
});

module.exports = router ;