const ErrorResponse = require('../utils/errorResponse')

const errorHandler = ( err, req, res, next)=>{

    let error = {...err}
    error.message = err.message
    console.log(err)

    // mongoose bad ObjectId
    if (err.name === 'CastError'){
        const message = `can\'t find a user with id :${err.value}`
        error = new ErrorResponse(message, 404 )
    }
    // mongoose Validation error
    if (err.name === 'ValidationError'){
        const message = Object.values(err.errors)
                               .map( val => val.message   )
        error = new ErrorResponse(message, 404 )
    }
    // mongoose duplicated field
    if (err.code === 11000){
        const message = `Duplicated field value entered `
        error = new ErrorResponse(message, 400 )
    }


    res.status(error.statusCode || 500)
        .json({
             success: false ,
             error:error || 'server error'
        })
}
module.exports = errorHandler