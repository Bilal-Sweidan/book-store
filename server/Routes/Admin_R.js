const express = require('express')
const router = express.Router()

// modules
const { upload } = require('../modules/Multer') // multer
// database
const { Books, Authors , Accounts } = require('../modules/Schema')

router.get('/add-book',async (req,res,next) => {
    try{
        const authors = await Authors.find().select('_id arabic_name english_name')
        res.status(200).json(authors)
    }catch(e){
        res.status(401).send(false)
    }
})

router.post('/add-book',upload.fields([{name: 'cover' , maxCount: 1},{ name: 'book', maxCount : 1}]),async (req,res,next) => {
    const {name ,price,department,pages_number,author,description} = req.body
    try{
        const book = await Books.create({
            name: name,
            price: price,
            author: author,
            department: department,
            pages: pages_number,
            cover_image: req.files['cover'][0].filename,
            book_file: req.files['book'][0].filename,
            file_size: req.files['book'][0].size / (1024*1024) ,
            file_type: req.files['book'][0].mimetype,
            about: description,
        })
        res.status(200).send(true)
    }catch(e){
        res.status(401).send(false)
    }
})

router.post('/add-author',upload.single('author_photo'),async (req,res,next) => {
    const {arabic_name,english_name , about} = req.body
    try{
        const author = await Authors.create({
            arabic_name: arabic_name,
            english_name: english_name,
            about: about,
            photo: req.file.filename
        })
        console.log(author)
        res.status(200).send(true)
    }catch(e){
        console.log(e)
        res.status(401).send(false)
    }
})


router.put('/change-account-role',async (req,res) => {
    const {userId,role} = req.body
    try{
        const account = await Accounts.updateOne({_id : userId},{role : role})
        res.status(200).json({success : true})
    }catch(err){
        console.log(err)
        res.status(403).json({success : false})
    }
})


module.exports = router


// app.js file
// const express = require('express')
// const router = express.Router()
// const app = express()

// const user_pages = require('./books_route.js')

// app.use('/user',user_pages)
