const userModel = require('./userModel');
const ErrorResponse = require('../../utils/errorResponse')
const sendTokenResponse = require('../../utils/sendTokenResponse')
class UserController {


     async login ( req , res , next ){

         const { email, password } = req.body;


         console.log('done');
         // Validate emil & password
         if (!email || !password) {
             return next(new ErrorResponse('Please provide an email and password', 400));
         }

         // Check for user
         const user = await userModel.findOne({ email }).select('+password');

         if (!user) {
             return next(new ErrorResponse('User Not Found ! ', 401));
         }

         // Check if password matches
         const isMatch = await user.matchPassword(password);

         if (!isMatch) {
             return next(new ErrorResponse('Invalid password', 401));
         }

         console.log('done cookie')
         sendTokenResponse(user,200,res)

     }


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

     register ( req , res ,next) {
         const {name,login,email,password,role,lastName,address,image,number,
             isGarage,
             rib} = req.body



         userModel
             .create({name, login, password, role,lastName,address,image,number, isGarage, rib,email})
             .then((createdUser) => {   const token = createdUser.getSignedJwtToken()
                                             res.status(201)
                                                 .json({
                                                     success: "True",
                                                     token,
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