const serviceModel = require('./serviceModel');
const userModel = require('../User/userModel')
const garageModel = require('../Garage/garageModel')


class serviceController {


    async all(req, res, next) {

        res.status(200)
            .json(res.advancedResults)
    }

    async getGaragesInRadius(req, res, next) {
        const {distance} = req.params;
        const {lat, lng, name} = req.body
        // Get lat/lng from geocoder
        let services = []
        // Calc radius using radians
        // Divide dist by radius of Earth
        // Earth Radius = 3,963 mi / 6,378 km
        const radius = distance / 6378;
        await garageModel.find({
            location: {$geoWithin: {$centerSphere: [[lng, lat], radius]}}
        }).then(garage => {
            garage.map(async garage => {

                await serviceModel
                    .findOne({garage: garage._id, name: name})
                    .populate('garage')
                    .then((service) => {

                            if (service) services.push(service)
                        }
                    )
            })
        })


        setTimeout(function () {
            res.status(200).json({
                success: true,
                count: services.length,
                data: services
            })
        }, 500)

    }

    get(req, res, next) {

        GarageModel
            .findById(req.params.id)
            .then((user) => {
                if (user) {
                    serviceModel.find({user: req.params.userId}).then((service) => {
                        res.status(200)
                            .json({
                                success: "True",
                                data: service,
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

    async store(req, res, next) {
        serviceModel.create(req.body)
            .then((createdGarage) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: createdGarage,
                    })
            }).catch((err) => {
            next(err)
        })
    }

    put(req, res, next) {

        serviceModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
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

module.exports = new serviceController();