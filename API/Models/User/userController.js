const User = require('./userModel');
const ErrorResponse = require('../../utils/errorResponse')
const sendTokenResponse = require('../../utils/sendTokenResponse')
const path = require('path');
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

    async photoUpload(req, res, next) {
        const user = await User.findById(req.params.id);
        console.log(req.body)
        if (!user) {
            return next(
                new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
            );
        }

        // Make sure user is User owner
        /*if (User.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return next(
                new ErrorResponse(
                    `User ${req.params.id} is not authorized to update this User`,
                    401
                )
            );
        }*/

        if (!req.files) {
            return next(new ErrorResponse(`Please upload a file`, 400));
        }

        const file = req.files.file;
        // Make sure the image is a photo
        if (!file.mimetype.startsWith('image')) {
            return next(new ErrorResponse(`Please upload an image file`, 400));
        }

        // Check filesize
        if (file.size > process.env.MAX_FILE_UPLOAD) {
            return next(
                new ErrorResponse(
                    `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
                    400
                )
            );
        }

        // Create custom filename
        file.name = `photo_${user._id}${path.parse(file.name).ext}`;

        file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
            if (err) {
                console.error(err);
                return next(new ErrorResponse(`Problem with file upload`, 500));
            }

            await User.findByIdAndUpdate(req.params.id, { photo: file.name });

            res.status(200).json({
                success: true,
                data: file.name
            });
        });
    }
}
module.exports = new UserController();