const express = require('express');
const prisma = require('../config/db');
const {hashPassword} = require('../utils/hash');

const router = express.Router();


const userZodVerify = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
});

router.post('/',(req,res)=>{

    try {
        userZodVerify.parse(req.body);
    
    const {name,email,password} = req.body;

    password = hashPassword(password);
    prisma.user.create({
        data:{
            name,
            email,
            password
        }
    }).then((data)=>{
        res.json({status:'success'});
    }).catch((err)=>{
        res.json(err);
    })
    } catch (error) {
        return res.status(400).json({ error});
    }
});


module.exports = router;