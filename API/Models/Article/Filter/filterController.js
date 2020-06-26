const filterModel = require('./filterModel');


class filterController {


    async all ( req , res , next ) {

        res.status(200)
            .json(res.advancedResults)
    }


    async store ( req , res ,next) {

    }

    put ( req , res ,next ) {

        filterModel.findByIdAndUpdate(req.params.id, req.body , {
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
        filterModel.findByIdAndDelete(req.params.id)
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