const express = require("express");
const cookieParser = require("cookie-parser");
const jsonwebtoken = require("jsonwebtoken");
const prisma = require("../config/db");


const router = express.Router();
router.use(cookieParser());

router.post("/",async (req,res)=>{

    const token = req.cookies.token;
    console.log(token);

    try{const id = jsonwebtoken.verify(token, process.env.JWT_SECRET).userId;

    const response = await prisma.application.findMany({
        where:{
            userId:id
        }
    });

    res.json(response);}
    catch(error){
        console.log(error);
        return res.status(400).json({ error });
    }
});

module.exports = router;

