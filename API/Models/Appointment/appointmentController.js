const appointmentModel = require('./appointmentModel');
const garageModel = require('../Garage/garageModel');
const userModel = require('../User/userModel')
const IsAvailable = require('../../utils/IsAvailable')
const carModel = require('../Car/carModel');
const ErrorResponse = require('../../utils/errorResponse')

class appointmentController {


    async all(req, res, next) {

        console.log(req.user._id)
        res.status(200)
            .json(res.advancedResults)
    }

    async GarageDayXTimings(req, res, next) {
        let dates = []
        const date = new Date(req.body.date)
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
        const app = await appointmentModel.find({
            garage: req.body.garage,
            date: { $gte: date, $lte: newDate }
        }).populate('service')
        app.map(app => {
            dates.push({ date: app.date, duration: app.service.duration })
        })
        res.status(200)
            .json({
                success: "True",
                data: dates,
            })
    }

    async Confirm(req, res, next) {
        let dates = []
        const duration = req.body.appointment.duration
        const garage = await garageModel.findOne({ user: req.user._id })
        const dateApp = new Date(req.body.appointment.date)
        const dateBefore = new Date(dateApp.getFullYear(), dateApp.getMonth(), dateApp.getDate())
        const dateAfter = new Date(dateApp.getFullYear(), dateApp.getMonth(), dateApp.getDate() + 1)
        const appointments = await appointmentModel.find({
            garage: garage._id,
            date: { $gte: dateBefore, $lte: dateAfter }
        })
        appointments.map(app => {
            dates.push({ date: app.date, duration: app.service.duration })
        })
        if (IsAvailable(dates, dateApp, duration, 2) >= 0) {
            await appointmentModel.findByIdAndUpdate(req.body.appointment._id, { state: "Confirmed" })
            res.status(200).json({
                success: "True",
                data: "timing available ",
            })
        } else res.status(200).json({
            success: "false",
            data: "timing NOT available ",
        })
    }

    async myAppointments(req, res, next) {

        if (req.user.role === 'user' || req.user.role === 'admin') {
            const car = await carModel.findOne({ user: req.user._id })

            if (car) {
                const appointments = await appointmentModel.find({ car: car._id })
                    .sort({ date: -1 })
                    .populate('garage')
                    .populate('service')

                res.status(200)
                    .json({
                        success: "True",
                        data: appointments,
                    })
            } else res.status(404)
                .json({
                    success: "false",
                    data: "car not found",
                })
        } else {
            const garage = await garageModel.findOne({ user: req.user._id })
            const appointments = await appointmentModel.find({ garage: garage._id }).sort({ date: -1 })
                .populate('car')
                .populate('service')
            console.log(appointments)
            res
                .status(200)
                .json({
                    success: "True",
                    data: appointments,
                })

        }
    }


    async store(req, res, next) {

        await carModel.find({ user: req.body.user }).then(() => {

            appointmentModel
                .create(req.body)
                .then((app) => {
                    res.status(200)
                        .json({
                            success: "True",
                            data: app,
                        })
                })

                .catch((err) => {
                    next(err)
                })
        })
    }

    delete(req, res, next) {
        serviceModel.findByIdAndDelete(req.params.id)
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch((err) => {
                next(err)
            })
    }


}

module.exports = new appointmentController();