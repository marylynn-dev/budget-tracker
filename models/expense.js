const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    amount: {
        required: true,
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        required: true,
        type: String
    },
})

const expenseModel = mongoose.model('expense', expenseSchema)

module.exports = expenseModel