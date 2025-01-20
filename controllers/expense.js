const Expense = require('../models/expense.js')
const User = require('../models/user.js')

async function create(req, res) {
    const { title, amount, categoryId, description } = req.body
    const userId = req.payload.userId
    try {
        const expense = new Expense({ title, amount, categoryId, description, userId })
        const savedexpense = await expense.save()
        res.json({ message: "Expense created Successfully", data: savedexpense })
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
            res.json({ message: "Expense was updated successfully", data: { expenseData } })
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
    try {
        const userId = req.payload.userId
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
// a users weekly expenses
async function weekly(req, res) {
    try {
        const currentDate = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(currentDate.getDate() - 7);

        const weeklyExpenses = await Expense.find({
            user: req.payload.userId,
            date: { $gte: oneWeekAgo, $lte: currentDate }
        });

        if (!weeklyExpenses) {
            return res.status(404).json({ message: 'No expenses found for the past week' });
        }

        res.status(200).json({ expenses: weeklyExpenses });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err });
    }
}





module.exports = {
    create,
    edit,
    get,
    getOne,
    del,
    getForOneUser,
    weekly
}