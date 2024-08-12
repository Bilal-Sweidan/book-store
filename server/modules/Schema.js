const mongoose = require('mongoose')

const Account = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        trim : true,
        lowercase: true
    },
    password: {
        type : String,
        trim: true,
        required: true,
    },
    number: {
        type: String,
        required: true,
        unique : true,
        trim: true
    },
    role: {
        type: String,
        require: true,
    },
    // card_id: String,
    // author: String
})

const Card = mongoose.Schema({
    content: [String],
})

const Book = mongoose.Schema({
    name: String,
    author: String, // id of author data
    cover_image: String,
    about: {
        type: String,
    },
    rate: {
        type: Number,
    },
    createdAt: {
        type: Date,
    },
    department: {
        type: Array,
        required: true
    },
    file_size: {
        type: Number,
    },
    pages: {
        type: Number,
        required: true
    },
    file_type: {
        type: String,
    },
    fame:{
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    book_file: {
        type: String,
        required: true,
    }
})

const Author = mongoose.Schema({
    arabic_name: String,
    english_name: String,
    about: String,
    photo: String
})

const Books = mongoose.model('Books',Book)
const Accounts = mongoose.model('Accounts',Account)
const Cards = mongoose.model('Cards',Card)
const Authors = mongoose.model('Authors',Author)


module.exports = { Accounts,Books,Cards,Authors }