const createError = require('http-errors')
const User = require('../models/user')
const bcrypt = require('bcrypt');
const { authSchema } = require('../helpers/validation')
const { signAccessToken } = require('../helpers/jwt')

const register = async (req, res, next) => {
    try {
        const { email, name, amount } = req.body;
        const validate = { email: email, password: req.body.password }
        const result = await authSchema.validateAsync(validate);

        result.name = name;
        result.amount = amount

        const doesExist = await User.findOne({ email: result.email })
        if (doesExist) throw createError.Conflict(`${result.email} has already been registered`)
        const user = new User(result)
        const savedUser = await user.save()
        const accessToken = await signAccessToken(savedUser.id)
        const { password, ...passwordLessUser } = savedUser.toObject();
        res.send({ passwordLessUser, accessToken })

    } catch (error) {
        console.log(error)
        if (error.isJoi === true) error.status = 422
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })
        if (!user) throw createError.NotFound('User not registered')

        const isMatch = await user.isValidPassword(result.password)
        if (!isMatch) throw createError.Unauthorized('Username/Password is not valid')

        const accessToken = await signAccessToken(user.id)
        const { password, ...passwordLessUser } = user.toObject();
        res.send({ passwordLessUser, accessToken });
    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid Username/Password'))
        next(error)
    }
}

// const logOutFunction = async (req, res, next) => {
//     try {
//         const { refreshToken } = req.body
//         if (!refreshToken) throw createError.BadRequest()
//     } catch (error) {
//         next(error)
//     }
// }

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


const edit = async (req, res) => {
    const userData = req.body;
    console.log(userData)
    // Check if password is present and modified
    if (userData.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(stringify(userData.password), salt);
            userData.password = hashedPassword;
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    User.findOneAndUpdate({ email: userData.email }, userData, { new: true })
        .then((userData) => {
            res.status(200).json({ message: "User was updated successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};




module.exports = {
    register,
    login,
    getOne,
    edit
}