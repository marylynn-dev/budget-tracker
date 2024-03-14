const express = require('express')
const { verifyAccessTokenFunction } = require('../controllers/jwt')
const { create, edit, get, getOne, del, getForOneUser } = require('../controllers/expense')

const router = express.Router()

router.get('/', verifyAccessTokenFunction, get)
router.post('/', verifyAccessTokenFunction, create)
router.put('/:id', verifyAccessTokenFunction, edit)
router.get('/:id', verifyAccessTokenFunction, getOne)
router.delete('/:id', verifyAccessTokenFunction, del)
router.get('/get/:userId', verifyAccessTokenFunction, getForOneUser)

module.exports = router