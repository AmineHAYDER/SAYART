const garageModel = require('./garageModel');
const ErrorResponse = require('../../utils/errorResponse')

const reverser = require('../../fastDecode/reverser')

class garageController {
    async decode ( req , res , next ) {

        console.log(req.body)
        const data = await reverser(req,res)
    }
    async all ( req , res , next ) {
 console.log('here')
        res.status(200)
            .json(res.advancedResults)
    }

    get ( req , res, next) {

        garageModel.findById(req.params.id)
            .then(  (garage) =>  {
                if (!garage){
                    return next(new ErrorResponse(`can\'t find a garage with id :${req.params.id}`,404))
                }
                res.status(200)
                    .json({
                        success: "True",
                        data: garage
                    })
            }).catch( (err) => {
            next(err)
        })
    }

    store ( req , res ,next) {

        garageModel.create(req.body)
            .then((createdGarage) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: createdGarage,
                    })
            }).catch( (err) => {
            next(err)
        })
    }

    put ( req , res ,next ) {

        garageModel.findByIdAndUpdate(req.params.id, req.body , {
            new : true ,
            runValidators: true
        })
            .then((updatedGarage) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedGarage,
                    })
            }).catch( (err) => {
            next(err)
        })
    }
    delete ( req, res , next ) {
        garageModel.findByIdAndDelete(req.params.id)
            .then((updatedGarage) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedGarage,
                    })
            }).catch( (err) => {
            next(err)
        })
    }


}
module.exports = new garageController();