const User = require('./userModel.js');
const ErrorResponse = require('../../utils/errorResponse')
const sendTokenResponse = require('../../utils/sendTokenResponse')
class UserController {

    all(req, res, next) {
        res.status(200)
            .json(res.advancedResults)

    }

    get(req, res, next) {

        User.findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return next(new ErrorResponse(`can\'t find a user with id :${req.params.id}`, 404))
                }
                res.status(200)
                    .json({
                        success: "True",
                        data: user
                    })
            }).catch((err) => {
                next(err)
            })



    }

    put(req, res, next) {

        User
            .findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            .then((updatedUser) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: updatedUser,
                    })
            }).catch((err) => {
                next(err)
            })
    }

    // We got a problem in delete method can't execute the userschema.pre method in userModel
    async delete(req, res, next) {

        const user = await User.findById(req.params.id)

        const deletedUser = await User.deleteOne(user)

        res
            .status(201)
            .json({
                success: "True",
                data: deletedUser,
            })
    }

}
module.exports = new UserController();