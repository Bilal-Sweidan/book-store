const mongoose = require('mongoose')

const Account = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    number: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        trim: true
    },
    EmailBox_ID: {
        type: String,
        unique: true
    }
    // card_id: String,
    // author: String
})

const Card = mongoose.Schema({
    booksID: String,
    userId : String,
    content: [String],
})

const Book = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
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
        default: Date.now()
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
    fame: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    book_file: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        trim: true
    }
})

const Author = mongoose.Schema({
    arabic_name: String,
    english_name: String,
    about: String,
    photo: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Support_message = mongoose.Schema({
    account_ID: {
        type : String,
        required: true,
        unique: false,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
    data: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ['failed',"sent","readed","responsed"],
        default: "sent"
    },
    res_text: {
        type: String,
        trim: true
    }
}) 

const Books = mongoose.model('Books', Book)
const Accounts = mongoose.model('Accounts', Account)
const Cards = mongoose.model('Cards', Card)
const Authors = mongoose.model('Authors', Author)
const Support_messages = mongoose.model("Support_messages",Support_message)


module.exports = { Accounts, Books, Cards, Authors, Support_messages }