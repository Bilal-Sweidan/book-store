// multer
const multer = require('multer')
const path = require('node:path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, 'D:\\my projects\\book-store\\client\\src\\assets\\Books images')
        if (file.fieldname === 'cover') {
            cb(null, '..\\client\\src\\assets\\Books images');
        }else if (file.fieldname === 'book') {
            cb(null, 'D:\\my projects\\book-store\\client\\public\\Books');
        }else if(file.fieldname === 'author_photo'){
            cb(null,'..\\client\\public\\Authors')
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage }) 

module.exports = {
    upload
}