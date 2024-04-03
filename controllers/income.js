const Income = require('../models/income.js')
const User = require('../models/user.js')
const { getUserIdFromHeader } = require('../helpers/jwt.js')

async function create(req, res) {
    const { title, description, amount, date } = req.body

    const userId = req.payload.aud
    try {
        const income = new Income({ title, description, amount, date, userId })

        const savedincome = await income.save()

        //update user's income array
        const user = await User.findById(userId)
        if (!user) { return res.json({ message: 'User not found!' }) }
        user.income.push(savedincome._id)
        user.amount = user.amount + savedincome.amount

        await user.save()

        res.json({ message: "Userand income Updated Successfully", data: savedincome })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

function edit(req, res) {
    const incomeId = req.params.id
    const incomeData = req.body
    Income
        .findOneAndUpdate({ _id: incomeId }, incomeData, { new: true })
        .then((incomeData) => {
            res.json({ message: "income was updated successfully", data: { incomeData } })
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
}

async function get(req, res) {
    try {
        const incomes = await Income.find()
        res.json({ message: "All incomes", data: incomes })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

function getOne(req, res) {
    const incomeId = req.params.id
    Income
        .findOne({ _id: incomeId })
        .then((incomeData) => res.json({ data: incomeData }))
        .catch((err) => res.status(500).json({ message: err.message }))
}

function del(req, res) {
    const incomeId = req.params.id;

    // Step 1: Delete the income
    Income.deleteOne({ _id: incomeId })
        .then(() => {
            // Step 2: Update the users to remove the income ID from their income array
            return User.updateMany(
                { incomes: incomeId }, // Filter users where the income ID is in their incomes array
                { $pull: { incomes: incomeId } } // Remove the income ID from the incomes array
            );
        })
        .then(() => {
            // If both operations are successful, respond with success message
            res.json({ message: "income deleted successfully" });
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
        const incomes = await Income.find({ userId: userId }).sort({ date: 1 });


        // // Organize incomes by month and year
        // const incomesByMonthYear = {};
        // incomes.forEach(income => {
        //     const date = new Date(income.date);
        //     const monthYearKey = `${date.getMonth() + 1}-${date.getFullYear()}`;
        //     if (!incomesByMonthYear[monthYearKey]) {
        //         incomesByMonthYear[monthYearKey] = [];
        //     }
        //     incomesByMonthYear[monthYearKey].push(income);
        // });

        res.json({ message: "incomes for user ", data: incomes });
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