const express = require('express')

const router = express.Router()

// DataBases
const {Books, Authors} = require('../modules/Schema')

router.get(`/:Book_name`,async (req,res) => {
    const {Book_name} = req.params
    try{
        const data = await Books.findOne({"name" : Book_name})
        const author = await Authors.findOne({_id : data.author }) 
        console.log(data) 
        res.status(200).json({"book" : data , author})
    }catch(err){
        console.log(err)
        res.status(403)
    }

})


module.exports = router