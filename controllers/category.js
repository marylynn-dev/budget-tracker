const Category = require('../models/category.js')
const User = require('../models/user.js')
const { getUserIdFromHeader } = require('../helpers/jwt.js')

async function create(req, res) {
    const { title, amount } = req.body
    const userId = req.payload.aud
    try {
        const category = new Category({ title, userId , amount})
        const savedCategory = await category.save()

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        user.categories.push(savedCategory._id)
        await user.save()

        res.json({ message: "User and Category Updated Successfully", data: savedCategory })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
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
    const categoryId = req.params.id;

    // Step 1: Delete the category
    Category.deleteOne({ _id: categoryId })
        .then(() => {
            // Step 2: Update the users to remove the category ID from their category array
            return User.updateMany(
                { categorys: categoryId }, // Filter users where the category ID is in their categorys array
                { $pull: { categorys: categoryId } } // Remove the category ID from the categorys array
            );
        })
        .then(() => {
            // If both operations are successful, respond with success message
            res.json({ message: "category deleted successfully" });
        })
        .catch((err) => {
            // If an error occurs during the operation, respond with an error message
            res.status(500).json({ message: err.message });
        });
}

// get categories for one user
async function getForOneUser(req, res) {
    const authHeader = req.headers['authorization'];

    try {
        const userId = getUserIdFromHeader(authHeader);
        const categories = await Category.find({ userId: userId }); // Query categories for the specific user
        res.json({ message: "Categories for the user", data: categories });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}


module.exports = {
    create,
    edit,
    get,
    getOne,
    del,
    getForOneUser
}