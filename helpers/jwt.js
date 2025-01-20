const JWT = require('jsonwebtoken')
const createError = require('http-errors')

const signAccessToken = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = { userId }
        const secret = process.env.ACCESS_TOKEN_SECRET
        const options = {
            expiresIn: '1h',
            audience: 'Marline'
        }
        JWT.sign(payload, secret, options, (error, token) => {
            if (error) {
                console.log(error)
                reject(createError.InternalServerError())
            } else {
                resolve(token)
            }

        })
    })
}

const verifyAccessToken = (req, _, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return next(createError.Unauthorized());
    const bearerToken = authHeader.split(' ');

    if (bearerToken.length !== 2 || bearerToken[0] !== 'Bearer') {
        return next(createError.Unauthorized());
    }
    const token = bearerToken[1];

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err && err.name === 'JsonWebTokenError') {
            return next(createError.Unauthorized(err.message));
        } else if (err) {
            return next(createError.Unauthorized());
        }
        req.payload = payload;
        console.log('verifying token')
        next();
    });
}

const decodeTokenFunction = (token) => {
    try {
        const decodedToken = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return decodedToken;
    } catch (error) {
        throw createError.Unauthorized('Invalid access token');
    }
}

const getUserIdFromHeader = (authHeader) => {
    if (!authHeader) {
        throw new Error('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        throw new Error('Access token missing');
    }

    try {
        const decodedToken = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.payload.userId;

        if (!userId) {
            throw new Error('User not found');
        }
        console.log(userId)
        return userId;
    } catch (error) {
        throw createError.Unauthorized('Invalid access token');
    }
};


module.exports = {
    signAccessToken,
    verifyAccessToken,
    decodeTokenFunction,
    getUserIdFromHeader
}