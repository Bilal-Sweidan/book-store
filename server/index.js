const express = require('express')
const env = require('dotenv').config()
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const session = require('express-session')
const cors = require('cors')
const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')
const cookieParser = require("cookie-parser");
const app = express()

app.use(express.json());
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
app.use(session({
    secret: "1234567890qwertyuiopasdfghjkl;zxcvbnm,.",
    resave: false,
    saveUninitialized: false
}))

// Modules
const { Accounts, Cards, Authors, Books } = require('./modules/Schema')
const { Hash, Compare } = require('./modules/Hashing')



app.get('/', async (req, res) => {
    // req.json(req.user)
    try {
        const books = await Books.find()
        res.status(200).json(books)
    } catch (e) {
        console.log(e)
        res.status(404)
    }
})

app.post('/', authenticateToken, async (req, res, next) => {
    
})


app.post('/getAuthor_name', async (req, res) => {
    const author = await Authors.findOne({ "_id": (req.body.author_id) })
    res.json(author)
})


app.post('/login', async (req, res, next) => {
    const { email, password } = req.body
    try {
        const account = await Accounts.findOne({ email: email })
        if (account) {
            if (Compare(password, account.password)) {
                const accessToken = jwt.sign({ account }, process.env.ACCESS_TOKEN_SECRET,{expiresIn : '1d'}) //, { expiresIn: '1d' }
                res.cookie("token", accessToken, {
                    withCredentials: true,
                    httpOnly: false,
                });
                res.status(201).json({account , message: "User logged in successfully", success: true });
                next()
            } else {
                res.send("wrong password or email").status(404)
            }
        }
    } catch (e) {
        console.log(e)
        res.status(500).send(false)
    }
})

app.get('/logout',(req,res,next) => {
    console.log('logged out')
    try{
        res.clearCookie('token').status(200).json({ success: true, message: 'User logged out successfully' })
    }catch(err){
        console.log(err)
    }
})

function authenticateToken(req, res, next) {

    const token = req.cookies.token
    if(!token){
        return res.status(403)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(400)
        }
        res.json(user)
        // res.status(201).json({user: account, message: "User logged in successfully", success: true });
        next()
    })
}


app.post('/sign-up', async (req, res) => {
    const { name, number, email, password } = req.body
    try {
        const account = await Accounts.create({
            name: name,
            number: number,
            email: email,
            password: Hash(password),
            role: 'User'
        })
        res.status(200).send(true)
    } catch (e) {
        console.log(e)
        res.status(500).send('this account is already exict !!!!')
    }
})

// Routes
const Admin_R = require('./Routes/Admin_R')
const Home = require('./Routes/Home')
app.use('/A', Admin_R);
app.use('/',Home)


app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
    mongoose.connect(process.env.DATABASE_URL).then(res => {
        console.log('==> There are not any problems <==')
    })
        .catch(e => {
            console.log(e)
        })
})
