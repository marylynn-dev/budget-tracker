const express = require('express')
const router = express.Router()
const { verifyAccessTokenFunction } = require('../controllers/jwt')
const { registerFunction, logInFunction, refreshTokenFunction, logOutFunction, getOne, edit } = require('../controllers/auth')

router.post('/register', registerFunction)
router.post('/log-in', logInFunction)
router.post('/refresh-token', refreshTokenFunction)
router.delete('/log-out', logOutFunction)
router.get('', getOne)
router.put('', edit)

module.exports = router
