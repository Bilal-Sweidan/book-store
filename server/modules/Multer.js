// multer
const multer = require('multer')
const path = require('node:path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'D:\\my projects\\book-store\\client\\src\\assets\\Books images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const cover = multer({ storage }) 

module.exports = {
    cover
}