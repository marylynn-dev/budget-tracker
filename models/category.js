const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        },

})

const categoryModel = mongoose.model('category', categorySchema)

module.exports = categoryModel