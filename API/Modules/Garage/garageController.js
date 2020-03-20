const garageModel = require('./garageModel');
const ErrorResponse = require('../../utils/errorResponse')
class garageController {


    async all ( req , res , next ) {
        let fields
        let sortBy
        const reqQuery = { ...req.query};

        // gt|gte|lt|lte|in query

        const removeFields = ['select','sort','page','limit'];
        removeFields.forEach(param => delete reqQuery[param])
        let queryStr = JSON.stringify(reqQuery)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>`$${match}`)

        //select fields
        if (req.query.select){
            fields = req.query.select.split(',').join(' ')
        }
        //sort

        if (req.query.sort){
            sortBy = req.query.sort.split(',').join(' ')
        }else {

        }
        //Pagination

        const page = parseInt(req.query.page,10)||1
        const limit = parseInt(req.query.limit,10)||1
        const startIndex = ( page - 1 ) * limit
        const endIndex =  page * limit
        const total = await garageModel.countDocuments()


        //Pagination results

        const pagination = {}

        if (endIndex < total){
            pagination.next = {

                page : page +1 ,
                limit
            } }
        if (startIndex > 0) {
            pagination.prev = {

                page: page - 1,
                limit
            }
        }
        //get user's garages populated
        console.log(req.params.userId)
        garageModel.find({user: req.params.userId})
            .populate({
                path:'user',
                select :'name'
            })
            .select(fields)
            .sort(sortBy)
            .skip(startIndex)
            .limit(limit)
            .then( (garages)=> {
                res.status(200)
                    .json({
                        success: "True",
                        count: garages.length,
                        pagination :pagination,
                        data: garages
                    })
            }).catch((err)=>{
            next(err)
        })

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