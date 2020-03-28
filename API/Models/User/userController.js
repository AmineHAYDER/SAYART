const userModel = require('./userModel');
const ErrorResponse = require('../../utils/errorResponse')
const sendTokenResponse = require('../../utils/sendTokenResponse')
class UserController {

     all ( req , res , next ) {
          res.status(200)
             .json(res.advancedResults)

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
    async delete ( req, res , next ) {

         const user = await userModel.findById(req.params.id)

         user.remove()
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