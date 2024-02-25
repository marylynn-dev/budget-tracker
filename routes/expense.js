const express = require('express')
const { verifyAccessTokenFunction } = require('../controllers/jwt')
const { create, edit, get, getOne, del, getForOneUser } = require('../controllers/expense')

const router = express.Router()

router.get('/', get)
router.post('/', verifyAccessTokenFunction, create)
router.put('/:id', edit)
router.get('/:id', getOne)
router.delete('/:id', del)
router.get('/get/:userId', getForOneUser)

module.exports = router