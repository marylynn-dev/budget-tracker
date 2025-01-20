const express = require('express')
const { verifyAccessToken } = require('../helpers/jwt')
const { create, edit, get, getOne, del, getForOneUser } = require('../controllers/income')

const router = express.Router()

router.get('/', get)
router.get('/one-user', getForOneUser)
router.post('/', verifyAccessToken, create)
router.put('/:id', edit)
router.get('/:id', getOne)
router.delete('/:id', del)

module.exports = router