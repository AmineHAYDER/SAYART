const express = require('express');
const router = express.Router();
const { protect } = require('../../middelware/auth')
const authController = require('../Auth/authController')

router.use(express.json());

router
    .route('/create')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

router
    .route('/logout')
    .get(authController.logout);

router
    .route('/me')
    .get(protect, authController.me);


module.exports = router;