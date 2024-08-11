const express = require('express')
const env = require('dotenv').config()
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const session = require('express-session')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(express.urlencoded())
app.use(cors())
app.use(session({
    secret: "1234567890qwertyuiopasdfghjkl;zxcvbnm,.",
    resave: false,
    saveUninitialized: false
}))
// Modules
const { Accounts,Cards,Authors,Books } = require('./modules/Schema')
const { Hash,Compare } = require('./modules/Hashing')
// Routes
const Admin_R = require('./Routes/Admin_R')

app.get('/',async (req,res) => {
    try{
        const books = await Books.find()
        res.status(200).json(books)
    }catch(e){
        console.log(e)
        res.status(404)
    }
})

app.post('/login', async (req,res) => {
    const {email,password} = req.body
    try{
        const account = await Accounts.findOne({ email : email })
        if(Compare(password,account.password)){
            session.user = account
            res.status(200).json({'role' : account.role})
        }else{
            res.send("wrong password or email").status(404)
        }
    }catch(e){
        console.log(e)
        res.status(500).send(false)
    }
})

app.post('/sign-up', async (req,res) => {
    const {name,number,email,password} = req.body
    try{
        const account = await Accounts.create({
            name: name,
            number: number,
            email: email,
            password: Hash(password),
            role: 'User'
        })
        res.status(200).send(true)
    }catch(e){
        console.log(e)
        res.status(500).send('this account is already exict !!!!')
    }
})

// routes
app.use('/A',Admin_R);


app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${process.env.PORT}`)
    mongoose.connect(process.env.DATABASE_URL).then(res => {
        console.log('==> There are not any problems <==')
    })
    .catch(e => {
        console.log(e)
    })
})
