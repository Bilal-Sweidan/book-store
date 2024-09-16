const express = require('express')

const router = express.Router()

// DataBases
const {Books, Authors,Support_messages} = require('../modules/Schema')

router.get(`/books/:Book_name`,async (req,res) => {
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

router.post('/support_message',async (req ,res) => {
    console.log(req.body)
    const { user_ID,problem_text,problem_title,other_problem_title } = req.body
    try{
        const message = await Support_messages.create({
            account_ID: user_ID,
            text: problem_text,
            title: other_problem_title ? other_problem_title : problem_title,
        })
        res.status(200).json({success:true, message})
    }catch(err){
        console.log(err)
        res.status(400).json({success : false})
    }
})


module.exports = router