const express = require('express')
const { verifyAccessTokenFunction } = require('../controllers/jwt')
const { create, edit, get, getOne, del, getForOneUser } = require('../controllers/expense')

const router = express.Router()

router.get('/', verifyAccessTokenFunction, get)
router.get('/one-user', getForOneUser)
router.post('/', verifyAccessTokenFunction, create)
router.put('/:id', verifyAccessTokenFunction, edit)
router.get('/:id', verifyAccessTokenFunction, getOne)
router.delete('/:id', verifyAccessTokenFunction, del)

module.exports = router