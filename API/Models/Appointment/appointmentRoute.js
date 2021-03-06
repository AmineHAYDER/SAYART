const express = require('express');
const router = express.Router({mergeParams:true});
const advancedResults = require('../../middelware/advancedResults');
const { protect, authorize } = require('../../middelware/auth');

const Appointment =require('./appointmentModel')
const AppointmentController = require('./appointmentController');

//cors
const cors = require('cors');
const corsOptions = {
    origin: ['http://*:3000','http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(express.json());
router.use(cors(corsOptions));



router.route('/all')
       .get(protect,authorize('admin'),advancedResults(Appointment),AppointmentController.all);

router.route('/available')
    .post(AppointmentController.GarageDayXTimings);

router.route('/confirm')
    .put(protect,authorize('garage'),AppointmentController.Confirm);



router
    .route('/:id')
    .delete(AppointmentController.delete)

router
    .route('/')
    .post(AppointmentController.store)
    .get(protect,authorize('garage','admin','user'),AppointmentController.myAppointments)


module.exports = router ;