const express = require("express");
const cookieParser = require("cookie-parser");



const router = express.Router();

router.use(cookieParser());

router.post("/",async (req,res)=>{
    const{name,email,phone,category} = req.body;

    const response =  await prisma.mentor.findMany({
        where:{
            category:category
        }
    });

    res.json({message:`the mentor ${response.name}  will be assigned you sortly`});
})

module.exports = router;