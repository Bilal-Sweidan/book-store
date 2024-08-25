const express = require('express')

const router = express.Router()

// DataBases
const {Books} = require('../modules/Schema')

router.get(`/:Book_name`,async (req,res) => {
    const {Book_name} = req.params
    try{
        const data = await Books.findOne({"name" : Book_name})
        console.log(data) 
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(403)
    }

})


module.exports = router