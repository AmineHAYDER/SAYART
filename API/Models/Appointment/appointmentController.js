const appointmentModel = require('./appointmentModel');
const garageModel = require('../Garage/garageModel');
const userModel = require ('../User/userModel')

const carModel = require('../Car/carModel');
const ErrorResponse = require('../../utils/errorResponse')

class appointmentController {


    async all ( req , res , next ) {

        console.log(req.user._id)
        res.status(200)
            .json(res.advancedResults)
    }


    async myAppointments( req , res , next ) {

        if (!req.user.isGarage) {
            const car = await carModel.findOne({user:req.user._id})

            const appointments = await appointmentModel.find({car:car._id})
                                                       .populate('garage')
                                                       .populate('service')

            res.status(200)
                .json({
                    success: "True",
                    data: appointments,
                })
        }else {
            const garage = await garageModel.findOne({user:req.user._id})
            const appointments = await appointmentModel.find({garage:garage._id})
                .populate('garage')
                .populate('service')
            res
                .status(200)
                .json({
                    success: "True",
                    data: appointments,
                })

        }
        }


    get ( req , res, next) {

        userModel
            .findById(req.params.id)
            .then((user)=> {
                if (user){
                    serviceModel.find({user:req.params.userId }).then ((service)=>{
                        res.status(200)
                            .json({
                                success: "True",
                                data: service,
                            })
                    })}
                else {
                    res
                        .status(200)
                        .json({
                            success: "True",
                            data: "fammesh menou ",
                        })
                }})
            .catch ((err) => {
                next(err)
            })
    }

    async store ( req , res ,next) {
        await carModel.find({user:req.body.user}).then((car)=>{

            appointmentModel
                .create(req.body)
                .then((service)=> {
                            res.status(200)
                                .json({
                                    success: "True",
                                    data: service,
                                })
                        })

                .catch ((err) => {
                next(err)
                })
        })
    }

    put ( req , res ,next ) {

        serviceModel.findByIdAndUpdate(req.params.id, req.body , {
            new : true ,
            runValidators: true
        })
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch( (err) => {
            next(err)
        })
    }
    delete ( req, res , next ) {
        serviceModel.findByIdAndDelete(req.params.id)
            .then((updatedservice) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedservice,
                    })
            }).catch( (err) => {
            next(err)
        })
    }


}
module.exports = new appointmentController();