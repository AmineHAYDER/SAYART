const userModel = require('./userModel');
const ErrorResponse = require('../../utils/errorResponse')
class UserController {


     async all ( req , res , next ) {
         let query
         const reqQuery = { ...req.query};

         const removeFields = ['select','sort','page','limit'];

         removeFields.forEach(param => delete reqQuery[param])


         let queryStr = JSON.stringify(reqQuery)
         queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match =>`$${match}`)


         query = userModel.find(JSON.parse(queryStr))

         //select fields
         if (req.query.select){
             const fields = req.query.select.split(',').join(' ')
             query = query.select(fields)
         }

         //sort
         if (req.query.sort){
             const sortBy = req.query.sort.split(',').join(' ')
             query = query.sort(sortBy)
         }else {
             query = query.sort('-createdAt')

         }
          //Pagination

         const page = parseInt(req.query.page,10)||1
         const limit = parseInt(req.query.limit,10)||1
         const startIndex = ( page - 1 ) * limit
         const endIndex =  page * limit
         const total = await userModel.countDocuments()


         query = query.skip(startIndex).limit(limit)


         const users= await query

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




         res.status(200)
             .json({
                 success: "True",
                 count: users.length,
                 pagination :pagination,
                 data: users
             })
     }

     get ( req , res, next) {

         userModel.findById(req.params.id)
             .then(  (user) =>  {
                 if (!user){
                     return next(new ErrorResponse(`can\'t find a user with id :${req.params.id}`,404))
                 }
                 res.status(200)
                     .json({
                         success: "True",
                         data: user
                     })
             }).catch( (err) => {
                 next(err)
         })



     }

     store ( req , res ,next) {

         userModel.create(req.body)
                  .then((createdUser) => {
                                             res.status(201)
                                                 .json({
                                                     success: "True",
                                                     data: createdUser,
                                                 })
                  }).catch( (err) => {
                      next(err)
                  })
     }

     put ( req , res ,next ) {

         userModel.findByIdAndUpdate(req.params.id, req.body , {
                                                                         new : true ,
                                                                         runValidators: true
                  })
                  .then((updatedUser) => {
                      res.status(201)
                          .json({
                                    success: "True",
                                    data: updatedUser,
                                 })
                  }).catch( (err) => {
                             next(err)
                  })
     }
     delete ( req, res , next ) {
         userModel.findByIdAndDelete(req.params.id)
                  .then((updatedUser) => {
                         res.status(201)
                             .json({
                                 success: "True",
                                 data: updatedUser,
                             })
                  }).catch( (err) => {
                      next(err)
                  })
     }


}
module.exports = new UserController();