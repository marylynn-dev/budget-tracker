const Category = require('../models/category.js')
const User = require('../models/user.js')

async function create(req, res) {
    const { title } = req.body
    const userId = req.payload.aud
    try {
        const category = new Category({ title })
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
    const categoryId = req.params.id
    const categoryData = req.body
    Category
        .findOneAndUpdate({ _id: categoryId }, categoryData, { new: true })
        .then((categoryData) => {
            res.json({ message: "Category was updated successfully", data: { categoryData } })
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
}

async function get(req, res) {
    try {
        const categories = await Category.find()
        res.json({ message: "All categories", data: categories })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

function getOne(req, res) {
    const categoryId = req.params.id
    Category
        .findOne({ _id: categoryId })
        .then((categoryData) => res.json({ data: categoryData }))
        .catch((err) => res.status(500).json({ message: err.message }))
}

function del(req, res) {
    const categoryId = req.params.id
    Category
        .deleteOne({ _id: categoryId })
        .then(() => res.json({ message: "Category Deleted Successfully" }))
        .catch((err) => res.status(500).json({ message: err.message })) 
}

module.exports = {
    create,
    edit,
    get,
    getOne,
    del
}