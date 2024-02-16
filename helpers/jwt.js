const { signAccessTokenFunction, verifyAccessTokenFunction, signRefreshTokenFunction, verifyRefreshTokenFunction } = require('../controllers/jwt')

module.exports = {
    signAccessToken: signAccessTokenFunction,

    verifyAccessToken: verifyAccessTokenFunction,

    signRefreshToken: signRefreshTokenFunction,

    verifyRefreshToken: verifyRefreshTokenFunction,


}