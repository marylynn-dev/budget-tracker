const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    expenses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'expense',
        }
    ],
    amount: {
        type: Number
    }
})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel