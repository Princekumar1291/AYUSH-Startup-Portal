const express = require('express');
const prismadb = require('../config/db');
const {hashPassword}  = require('../utils/hash');

const router = express.Router();

router.post('/',async (req,res)=>{
    const{name,email,phone,expertise,number} = req.body;

    prismadb.mentor.create({
        data:{
            name,
            email,
            phone,
            cataegory:expertise,
            number
        }
    }).then((data)=>{
        res.json({message:"mentor profile created"});
    }).catch((err)=>{
        console.log(err);
        return res.status(400).json({error:err});
    })
})

module.exports = router;