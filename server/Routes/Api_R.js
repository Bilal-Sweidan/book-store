const express = require('express')
const router = express.Router()

const { Accounts } = require('../modules/Schema')
router.get('/accounts',async (req,res) => {
    try{
        const accounts_data = await Accounts.find()
        console.log(accounts_data)
        res.status(200).json(accounts_data)
    }catch(err){
        console.log(err)
        res.status(403)
    }
})


module.exports = router