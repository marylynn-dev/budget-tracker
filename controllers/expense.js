const Expense = require('../models/expense.js')
const User = require('../models/user.js')
const { getUserIdFromHeader } = require('../helpers/jwt.js')

async function create(req, res) {
    const { title, amount, category, date, description } = req.body
    const userId = req.payload.aud
    try {
        const expense = new Expense({ title, amount, category, date, description, userId })
        const savedexpense = await expense.save()
        const user = await User.findById(userId)
        if (!user) { return res.json({ message: 'User not found!' }) }
        user.expenses.push(savedexpense._id)
        await user.save()
        res.json({ message: "User and expense Updated Successfully", data: savedexpense })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
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
    const expenseId = req.params.id;

    // Step 1: Delete the expense
    Expense.deleteOne({ _id: expenseId })
        .then(() => {
            // Step 2: Update the users to remove the expense ID from their expense array
            return User.updateMany(
                { expenses: expenseId }, // Filter users where the expense ID is in their expenses array
                { $pull: { expenses: expenseId } } // Remove the expense ID from the expenses array
            );
        })
        .then(() => {
            // If both operations are successful, respond with success message
            res.json({ message: "Expense deleted successfully" });
        })
        .catch((err) => {
            // If an error occurs during the operation, respond with an error message
            res.status(500).json({ message: err.message });
        });
}
//get for one user
async function getForOneUser(req, res) {
    const authHeader = req.headers['authorization'];

    try {
        const userId = getUserIdFromHeader(authHeader);
        const expenses = await Expense.find({ userId: userId }).sort({ date: 1 });


        // // Organize expenses by month and year
        // const expensesByMonthYear = {};
        // expenses.forEach(expense => {
        //     const date = new Date(expense.date);
        //     const monthYearKey = `${date.getMonth() + 1}-${date.getFullYear()}`;
        //     if (!expensesByMonthYear[monthYearKey]) {
        //         expensesByMonthYear[monthYearKey] = [];
        //     }
        //     expensesByMonthYear[monthYearKey].push(expense);
        // });

        res.json({ message: "Expenses for user ", data: expenses });
    } catch (err) {
        res.status(500).json({ message: err.message });
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