const Expense = require('../models/expense.js')
const User = require('../models/user.js')

async function create(req, res) {
    const { title, amount, category, date, description } = req.body
    const userId = req.payload.aud
    try {
        const expense = new Expense({ title, amount, category, date, description })
        const savedexpense = await expense.save()
        const user = await User.findById(userId)
        if (!user) { return res.json({ message: 'User not found!' }) }
        user.expenses.push(savedexpense._id)
        await user.save()
        res.json({ message: "User and expense Updated Successfully", data: savedexpense })
    } catch (err) {
        console.log(err)
        res.json({ message: err.message })
    }
}

function edit(req, res) {
    const expenseId = req.params.id
    const expenseData = req.body
    Expense
        .findOneAndUpdate({ _id: expenseId }, expenseData, { new: true })
        .then((expenseData) => {
            res.json({ message: "expense was updated successfully", data: { expenseData } })
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
}

async function get(req, res) {
    try {
        const categories = await Expense.find()
        res.json({ message: "All expenses", data: categories })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

function getOne(req, res) {
    const expenseId = req.params.id
    Expense
        .findOne({ _id: expenseId })
        .then((expenseData) => res.json({ data: expenseData }))
        .catch((err) => res.status(500).json({ message: err.message }))
}

function del(req, res) {
    const expenseId = req.params.id
    Expense
        .deleteOne({ _id: expenseId })
        .then(() => res.json({ message: "expense Deleted Successfully" }))
        .catch((err) => res.status(500).json({ message: err.message }))
}

module.exports = {
    create,
    edit,
    get,
    getOne,
    del
}