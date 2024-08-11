const express = require('express')
const router = express.Router()

// modules
const { cover } = require('../modules/Multer') // multer
// database
const { Books } = require('../modules/Schema')

router.post('/add-book',cover.single("cover"),async (req,res,next) => {
    const {name ,price,department,pages_number,author,description} = req.body
    console.log(req.file.filename)
    const book = await Books.create({
        name: name,
        price: price,
        author: author,
        department: department,
        pages: pages_number,
        cover_image: req.file.filename,
        about: description
    })
})

module.exports = router


// app.js file
// const express = require('express')
// const router = express.Router()
// const app = express()

// const user_pages = require('./books_route.js')

// app.use('/user',user_pages)
