
const User = require('../User/userModel');
const ErrorResponse = require('../../utils/errorResponse')
const sendTokenResponse = require('../../utils/sendTokenResponse')
class UserController {


    async login(req, res, next) {

        const { email, password } = req.body;

        // Validate emil & password
        if (!email || !password) {
            return next(new ErrorResponse('Please provide an email and a password', 400));
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return next(new ErrorResponse('User Not Found ! ', 404));
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return next(new ErrorResponse('Invalid password', 401));
        }

        sendTokenResponse(user, 200, res)
       console.log('user Logged : '+ user.name)
    }

    async logout(req, res, next) {
        res.cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            data: {}
        });
    }

    register(req, res, next) {
        const { name, login, email, password, role, lastName, address, image, number,
            isGarage,
            rib } = req.body;

        User
            .create({ name, login, password, role, lastName, address, image, number, isGarage, rib, email })
            .then((createdUser) => {
                const token = createdUser.getSignedJwtToken()
                res.status(201)
                    .json({
                        success: "True",
                        token,
                    })
            }).catch((err) => {
                next(err)
            })
    }
    me(req, res, next) {

        User
            .findById(req.user.id)
            .then((User) => {
                res.status(201)
                    .json({
                        success: "True",
                        data: User
                    })
            }).catch((err) => {
                next(err)
            })
    }
}
module.exports = new UserController();