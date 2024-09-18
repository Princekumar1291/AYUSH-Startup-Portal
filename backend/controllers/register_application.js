const express = require("express");
const cookieParser = require("cookie-parser");
const jsonwebtoken = require("jsonwebtoken");
const prisma = require("../config/db");

const router = express.Router();
router.use(cookieParser());

router.post("/", async (req, res) => {

    console.log(req.body);

    const { name, founder, email ,description,stpid,category} = req.body;
    const token = req.cookies.token;
    console.log(token);

    const id = jsonwebtoken.verify(token, process.env.JWT_SECRET).userId;

    try {
        const response = await prisma.application.create({
            data: {
                title:name,
                founder:founder,
                email:email,
                userId:id,
                description:description,
                startupId:stpid
            }
        });

        res.json({ status: "success" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

module.exports = router;