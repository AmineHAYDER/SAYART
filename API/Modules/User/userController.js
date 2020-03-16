const userModel = require('./userModel');


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

     get ( req , res) {

         userModel.findById(req.params.id)
             .then(  (user) =>  {
                 res.status(200)
                     .json({
                         success: "True",
                         data: user
                     })
             }).catch( () => {
                 res.status(400)
                     .json({
                     success: false
                 })
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
     delete ( req, res ) {
         userModel.findByIdAndRemove(req.params.id)
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


}
module.exports = new UserController();