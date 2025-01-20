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
    description: {
        required: true,
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
}, { timestamps: true })

const expenseModel = mongoose.model('expense', expenseSchema)

module.exports = expenseModel