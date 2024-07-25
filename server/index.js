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
// DataBase
const {Books} = require('./modules/Schema')
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
    console.log(req.body)
    res.status(200).send(true)
})



app.listen(process.env.PORT,() => {
    console.log(`http://localhost:${process.env.PORT}`)
    mongoose.connect(process.env.DATABASE_URL).then(res => {
        console.log('==> There are not any problems <==')
    })
    .catch(e => {
        console.log(e)
    })
})