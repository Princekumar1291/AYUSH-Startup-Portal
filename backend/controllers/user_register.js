const express = require('express');
const prisma = require('../config/db');
const {hashPassword} = require('../utils/hash');
const router = express.Router();

router.post('/',(req,res)=>{
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
});


module.exports = router;