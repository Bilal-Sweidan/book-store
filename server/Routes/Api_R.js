const express = require('express')
const router = express.Router()

const { Books, Accounts, Authors } = require('../modules/Schema')
router.get('/accounts', async (req, res) => {
    try {
        const accounts_data = await Accounts.find()
        console.log(accounts_data)
        res.status(200).json(accounts_data)
    } catch (err) {
        console.log(err)
        res.status(403)
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await Books.find()
        const authors = await Authors.find()
        res.status(200).json({ success: true, books, authors })
    } catch (err) {
        console.log(err)
        res.status(403).json({ success: false })
    }
})

router.get('/authors', async (req, res) => {
    try {
        const authors = await Authors.find()
        res.status(200).json({ success: true, authors })
    } catch (err) {
        res.status(403).json({ success: false })
    }
})


module.exports = router