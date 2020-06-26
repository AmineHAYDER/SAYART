const stockModel = require('./stockModel');
const oilModel = require('../Article/Oil/oilModel')
const filterModel = require('../Article/Filter/filterModel')
const wheelModel = require('../Article/Wheel/wheelModel')
const articleModel = require('../Article/articleModel')
const garageModel = require('../Garage/garageModel')
const userModel = require('../User/userModel')
const ErrorResponse = require('../../utils/errorResponse')

class stockController {


    async all(req, res, next) {

        const oils = await stockModel.find({oil: {$exists: true}}).populate("oilDetail")
        const wheels = await stockModel.find({wheel: {$exists: true}}).populate("wheelDetail")
        const filters = await stockModel.find({filter: {$exists: true}}).populate("filterDetail")

        res.status(200)
            .json({
                oils: oils, wheels: wheels,
                filters: filters
            })
    }

    async getMyWheels (req, res, next) {

        const garage = await garageModel.findOne({user:req.user._id})
        await stockModel.find({wheel: {$exists: true},garage:garage._id}).populate("wheelDetail").then((wheels)=>{
            res.status(200)
                .json({
                    success: true,
                    data: wheels
                })
        }).catch(err => next(err))


    }
    get(req, res, next) {


    }

    store(req, res, next) {
        if (req.body.oil) {
            oilModel.findById(req.body.oil).then(oil => {
                    if (!oil) {
                        return next(new ErrorResponse(`can\'t find an oil with id :${req.body.oil}`, 404))
                    } else {
                        stockModel
                            .create(req.body)
                            .then(stock => {
                                res.status(201)
                                    .json({
                                        success: true,
                                        data: stock,
                                    })
                            })
                            .catch(err => next(err))
                    }

                }
            )
        }
        if (req.body.wheel) {
            wheelModel.findById(req.body.wheel).then(wheel => {
                    if (!wheel) {
                        return next(new ErrorResponse(`can\'t find a wheel with id :${req.body.wheel}`, 404))
                    } else {
                        stockModel
                            .create(req.body)
                            .then(stock => {
                                res.status(201)
                                    .json({
                                        success: true,
                                        data: stock,
                                    })
                            })
                            .catch(err => next(err))
                    }
                }
            )
        }
        if (req.body.filter) {
            filterModel.findById(req.body.filter).then(filter => {
                    if (!filter) {
                        return next(new ErrorResponse(`can\'t find a filter with id :${req.body.filter}`, 404))
                    } else {
                        stockModel
                            .create(req.body)
                            .then(stock => {
                                res.status(201)
                                    .json({
                                        success: true,
                                        data: stock,
                                    })
                            })
                            .catch(err => next(err))
                    }
                }
            )
        }
        if (req.body.article) {
            articleModel.findById(req.body.article).then(article => {
                    if (!article) {
                        return next(new ErrorResponse(`can\'t find an oil with id :${req.body.article}`, 404))
                    } else {
                        stockModel
                            .create(req.body)
                            .then(stock => {
                                res.status(201)
                                    .json({
                                        success: true,
                                        data: stock,
                                    })
                            })
                            .catch(err => next(err))
                    }

                }
            )
        }
         res.status(401)
            .json({
                success: false,
                error: "article type missing",
            })
    }

    put(req, res, next) {

    }

    delete(req, res, next) {

    }


}

module.exports = new stockController();