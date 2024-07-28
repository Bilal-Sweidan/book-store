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
    price: {
        type: Number,
        require: true
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