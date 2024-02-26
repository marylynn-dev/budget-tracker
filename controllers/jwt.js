const JWT = require('jsonwebtoken')
const createError = require('http-errors')
const { createConnection } = require('mongoose')
const client = require('../helpers/init-redis')
const { result } = require('@hapi/joi/lib/base')

const signAccessTokenFunction = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {}
        const secret = process.env.ACCESS_TOKEN_SECRET
        const options = {
            expiresIn: '1h',
            audience: userId
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

const verifyAccessTokenFunction = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    // Check if the 'Authorization' header is missing
    if (!authHeader) return next(createError.Unauthorized());

    // Split the header to separate the 'Bearer' keyword and the token
    const bearerToken = authHeader.split(' ');

    // Check if the header has the expected format ("Bearer <token>")
    if (bearerToken.length !== 2 || bearerToken[0] !== 'Bearer') {
        return next(createError.Unauthorized());
    }

    // Extract the token
    const token = bearerToken[1];

    // Verify the token using your secret key
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err && err.name === 'JsonWebTokenError') {
            // Token verification failed due to a JWT error
            return next(createError.Unauthorized(err.message));
        } else if (err) {
            // Token verification failed for some other reason
            return next(createError.Unauthorized());
        }

        // Token is valid, so store the payload in the request object for later use
        req.payload = payload;

        // Continue processing the request
        next();
    });
}

const signRefreshTokenFunction = (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {}
        const secret = process.env.REFRESH_TOKEN_SECRET
        const options = {
            expiresIn: '1h',
            audience: userId
        }
        JWT.sign(payload, secret, options, (error, token) => {
            if (error) {
                console.log(error)
                reject(createError.InternalServerError())
            } else {
                client.SET(userId, token, 'EX', 365 * 24 * 6 * 60, (err, reply) => {
                    if (err) {
                        console.log(err.message)
                        reject(createError.InternalServerError())
                        return
                    }
                })
            }
            resolve(token)

        })
    })
}

const verifyRefreshTokenFunction = (refreshToken) => {
    return new Promise((resolve, reject) => {
        JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
            if (err) return reject(createError.Unauthorized())
            const userId = payload.aud

            client.GET(userId, (err, result) => {
                if (err) {
                    console.log(err.message)
                    reject(createError.InternalServerError())
                }
                if (refreshToken === result) return resolve(userId)
                reject(createError.un)
            })
            resolve(userId)
        })
    })
}

module.exports = {
    signAccessTokenFunction,
    verifyAccessTokenFunction,
    signRefreshTokenFunction,
    verifyRefreshTokenFunction,
}