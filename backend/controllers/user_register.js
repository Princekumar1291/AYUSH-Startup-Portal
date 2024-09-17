const express = require('express');
const zod = require('zod');
const prisma = require('../config/db');
const {hashPassword} = require('../utils/hash');

const router = express.Router();


const userZodVerify = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
    ayushCategory: zod.string()
});

router.post('/',async (req,res)=>{

    console.log(req.body);
    try {
        userZodVerify.parse(req.body);
    
    const {name,email,password,ayushCategory } = req.body;
    console.log(email,password);
    const pass = await hashPassword(password);
    console.log(pass);

    prisma.user.create({
        data:{
            name,
            email,
            password:pass,
            ayushCategory,
            role:"ADMIN"
        }
    }).then((data)=>{
        res.json({status:'success'});
    }).catch((err)=>{
        console.log(err);
        throw new Error(err);
    })
    } catch (error) {
        console.log(error);
        return res.status(400).json({error});
    }
});


module.exports = router;