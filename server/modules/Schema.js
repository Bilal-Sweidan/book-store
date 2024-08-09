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
    author: String,
    cover_image: String,
    about: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    department: {
        type: Array,
        required: true
    },
    file_size: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    file_type: {
        type: String,
        required: true
    },
    fame:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Author = mongoose.Schema({
    name: String,
    about: String,
    bornday: Date,
    deadday: Date,
    work: String
})

const Books = mongoose.model('Books',Book)
const Accounts = mongoose.model('Accounts',Account)
const Cards = mongoose.model('Cards',Card)
const Authors = mongoose.model('Authors',Author)


module.exports = { Accounts,Books,Cards,Authors }