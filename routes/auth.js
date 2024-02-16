const express = require('express')
const router = express.Router()
const { registerFunction, logInFunction, refreshTokenFunction, logOutFunction } = require('../controllers/auth')

router.post('/register', registerFunction)
router.post('/log-in', logInFunction)
router.post('/refresh-token', refreshTokenFunction)
router.delete('/log-out', logOutFunction)

module.exports = router
