const articleModel = require('./filterModel');


class filterController {


    async all ( req , res , next ) {

        res.status(200)
            .json(res.advancedResults)
    }


    async store ( req , res ,next) {
        articleModel.create(req.body)
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

        articleModel.findByIdAndUpdate(req.params.id, req.body , {
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
        articleModel.findByIdAndDelete(req.params.id)
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
module.exports = new filterController();