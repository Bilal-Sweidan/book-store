const mongoose = require('mongoose')
const Book = mongoose.Schema({
    name: String,
    author: String,
    cover_image: String,
    about: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        require: true
    },
    department: {
        type: Array,
        require: true
    },
    file_size: {
        type: Number,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    file_type: {
        type: String,
        require: true
    },
    fame:{
        type: Number,
        require: true
    },

})

const author = mongoose.Schema({
    name: String,
    about: String,
    bornday: Date,
    deadday: Date,
    work: String

})

const Books = mongoose.model('Books',Book)
module.exports = {
    Books
}