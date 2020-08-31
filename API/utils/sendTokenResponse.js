const ms = require('ms')

const sendTokenResponse = (user, statusCode, res) => {


    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .cookie(
            process.env.JWT_COOKIE_NAME,
            token,
            {
                httpOnly: true,
                signed: true,
                sameSite: true,
                expires: new Date(Date.now() + ms('10y')),
            })
        .status(statusCode)
        .json({
            user
        });
};

module.exports = sendTokenResponse