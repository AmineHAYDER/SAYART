const userModel = require('./userModel');


class UserController {


     all ( req, res ) {

         res.status(200)
            .json({
                        success: "True",
                        data: "show all users"
            })
     }
     get ( req, res, id  ){

             let user = userModel.get(z)
             res
                 .status(200)
                 .json({
                     success: "True",
                     data: `show user : ${req.params.id}`
                 })



     }
     store ( req, res ) {

             let user = {
                             login:'test',
                             name:'test',
                             lastName:'test',
                             address:'test',
                             image:'test',
                             number:'test',
                             email:'test',
                             password:'test',
                             isGarage:'test',
                             rib:'test'
                         }
             userModel.create(user)
                      .then((createdUser) => {
                                                 res
                                                     .status(200)
                                                     .json({
                                                         msg: "user added",
                                                         data: createdUser
                                              })
             })  ;
     }


}
module.exports = new UserController();