const express = require('express')
const { verifyAccessTokenFunction } = require('../controllers/jwt')
const { create, edit, get, getOne, del } = require('../controllers/expense')

const router = express.Router()

router.post('/', verifyAccessTokenFunction, create)
router.put('/:id', edit)
router.get('/', get)
router.get('/:id', getOne)
router.delete('/:id', del)

module.exports = router