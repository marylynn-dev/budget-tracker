const createError = require('http-errors')
const User = require('../models/user')
const { authSchema } = require('../helpers/validation')
const { signAccessToken, signRefreshToken, verifyRefreshToken, decodeTokenFunction, getUserIdFromHeader } = require('../helpers/jwt')

const Client = require('../helpers/init-redis')

const registerFunction = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        const validate = { email: email, password: password }
        const result = await authSchema.validateAsync(validate);

        result.name = name;

        const doesExist = await User.findOne({ email: result.email })
        if (doesExist) throw createError.Conflict(`${result.email} has already been registered`)
        const user = new User(result)
        const savedUser = await user.save()
        const accessToken = await signAccessToken(savedUser.id)
        const refreshToken = await signRefreshToken(savedUser.id)
        res.send({ accessToken, refreshToken })

    } catch (error) {
        console.log(error)
        if (error.isJoi === true) error.status = 422
        next(error)
    }
}

const logInFunction = async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })
        if (!user) throw createError.NotFound('User not registered')

        const isMatch = await user.isValidPassword(result.password)
        if (isMatch) throw createError.Unauthorized('Username/Password is not valid')

        // Assuming these functions sign the tokens
        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)

        res.send({ accessToken, refreshToken });
    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid Username/Password'))
        next(error)
    }
}


const refreshTokenFunction = async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
        const accessToken = await signAccessToken(userId)
        const refToken = await signRefreshToken(userId)
        res.send({ accessToken, refToken })
    } catch (error) {
        next(error)
    }
}

const logOutFunction = async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
        Client.DEL(userId, (err, value) => {
            if (err) {
                console.log(err.message)
                throw createError.InternalServerError()
            }
            console.log(value)
            res.sendStatus(204)
        })
    } catch (error) {
        next(error)
    }
}

const getOne = async (req, res) => {
    const authHeader = req.headers['authorization'];

    try {
        const userId = getUserIdFromHeader(authHeader);
        const userData = await User.findOne({ _id: userId });

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ data: userData });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

module.exports = {
    getOne
};



module.exports = {
    registerFunction,
    logInFunction,
    refreshTokenFunction,
    logOutFunction,
    getOne
}