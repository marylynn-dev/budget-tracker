const express = require('express')
const { create, edit, get, getOne, del, getForOneUser, weekly } = require('../controllers/expense')

const router = express.Router()

router.get('/', get)
router.get('/one-user', getForOneUser)
router.get('/weekly', get)
router.post('/', create)
router.put('/:id', edit)
router.get('/:id', getOne)
router.delete('/:id', del)

module.exports = router