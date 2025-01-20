const express = require('express')
const router = express.Router()
const { register, login, getOne, edit } = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)
// router.delete('/log-out', logOutFunction)
router.get('/', getOne)
router.put('/', edit)

module.exports = router
