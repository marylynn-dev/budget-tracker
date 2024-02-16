const Category = require('../models/category')
const User = require('../models/user.js')

async function create(req, res) {
    const { title } = req.body
    const userId = req.payload.aud

    console.log(userId)
    try {
        const category = new Category({
            title
        })
        const savedCategory = await category.save()
        const user = await User.findById(userId)
        if (!user) { return res.json({ message: 'User not found!' }) }
        user.categories.push(savedCategory._id)
        await user.save()
        res.json({ message: "User and Category Updated Successfully", data: savedCategory })
    } catch (err) {
        console.log(err)
        res.json({ message: err.message })
    }
}

function edit(req, res) {
    res.json({ message: "edit a category" })
}

function get(req, res) {
    res.json({ message: "get all categories" })
}

function getOne(req, res) {
    res.json({ message: "get one category" })
}

function del(req, res) {
    res.json({ message: "delete a category" })
}

module.exports = {
    create,
    edit,
    get,
    getOne,
    del
}