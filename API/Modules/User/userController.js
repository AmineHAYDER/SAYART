const userModel = require('./userModel');
const ErrorResponse = require('../../utils/errorResponse')

class UserController {


     all ( req , res ) {

         userModel.find()
                  .then(  (users) =>  {
                      res.status(200)
                          .json({
                              success: "True",
                              data: users
                          })
                  }).catch( () => {
                      res.status(400)
                          .json({
                              success: false
                          })
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

     store ( req , res ) {

         userModel.create(req.body)
                  .then((createdUser) => {
                                             res.status(201)
                                                 .json({
                                                     success: "True",
                                                     data: createdUser,
                                                 })
                  }).catch( () => {
                             res.status(400)
                                 .json({
                                     success: false
                                 })

                  })
     }

     put ( req , res ) {

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
                  }).catch( () => {
                             res.status(400)
                                 .json({
                                     success: false
                                 })
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
                      res.status(400)
                         .json({
                             success: false
                         })
                  })
     }


}
module.exports = new UserController();