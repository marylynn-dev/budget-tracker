const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel