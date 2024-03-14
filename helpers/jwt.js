const { signAccessTokenFunction, verifyAccessTokenFunction, signRefreshTokenFunction, verifyRefreshTokenFunction, decodeTokenFunction, getUserIdFromHeader } = require('../controllers/jwt')

module.exports = {
    signAccessToken: signAccessTokenFunction,

    verifyAccessToken: verifyAccessTokenFunction,

    signRefreshToken: signRefreshTokenFunction,

    verifyRefreshToken: verifyRefreshTokenFunction,

    decodeTokenFunction: decodeTokenFunction,

    getUserIdFromHeader: getUserIdFromHeader


}