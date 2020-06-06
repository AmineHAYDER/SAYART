const carModel = require('./carModel');
const userModel = require('../User/userModel')
const ErrorResponse = require('../../utils/errorResponse')

class carController {


    async all(req, res, next) {

        res.status(200)
            .json(res.advancedResults)
    }

    get(req, res, next) {

        userModel
            .findById(req.user._id)
            .then((user) => {
                if (user) {
                    carModel.findOne({user: req.user._id}).then((car) => {
                        if (car) {
                            res.status(200)
                                .json({
                                    success: "True",
                                    data: car,
                                    mileage: car.mileage,
                                })
                        } else {
                            res.status(404)
                                .json({
                                    success: "false",
                                    data: "car not found",
                                })
                        }
                    }).catch((err) => {
                        next(err)
                    })
                } else {
                    res
                        .status(200)
                        .json({
                            success: "True",
                            data: "fammesh menou ",
                        })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    store(req, res, next) {

        userModel
            .findById(req.user._id)
            .then((user) => {
                if (user) {
                    req.body.user = req.user._id
                    carModel.create(req.body).then((car) => {
                        res.status(201)
                            .json({
                                success: "True",
                                data: car,
                            })
                    }).catch((err) => {
                        next(err)
                    })
                } else {
                    res
                        .status(404)
                        .json({
                            success: false,
                            error: "fammesh menou ",
                        })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    put(req, res, next) {

        userModel
            .findById(req.user._id)
            .then((user) => {
                if (user) {
                    carModel.findOneAndUpdate({user: req.user._id}, req.body, {new: true, runValidators: true})
                        .then((car) => {
                            res.status(200)
                                .json({
                                    success: "True",
                                    data: car,
                                })
                        })
                } else {
                    res
                        .status(200)
                        .json({
                            success: "True",
                            data: "fammesh menou ",
                        })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    delete(req, res, next) {
        carModel.findByIdAndDelete(req.params.id)
            .then((updatedcar) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedcar,
                    })
            }).catch((err) => {
            next(err)
        })
    }


}

module.exports = new carController();