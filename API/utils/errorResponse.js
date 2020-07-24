class ErrorResponse extends Error {
    constructor(message, statusCode){
        super (message);
        this.statusCode = statusCode
        this.code = statusCode
    }
}
module.exports = ErrorResponse