const express = require('express');
const router = express.Router();

const authController = require('../Auth/authController')

router.use(express.json());

router.post('/login',
    authController.login );


router
    .route('/logout')
    .get( authController.logout);


router.post(
    '/create' ,
    authController.register
);

module.exports = router ;