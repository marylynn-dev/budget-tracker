const mongoose = require('mongoose')

const incomeSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String
    },
    amount: {
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

})

const incomeModel = mongoose.model('income', incomeSchema)

module.exports = incomeModel