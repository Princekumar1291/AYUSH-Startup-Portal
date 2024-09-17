const express = require('express');
const prisma = require('../config/db');
const {comparePassword} = require('../utils/hash');
const {generateToken} = require('../utils/jwt');
const router = express.Router();

router.post('/',async (req,res)=>{
    const {email,password} = req.body;
    const response = await prisma.user.findUnique({ where: { email } });

    if (!response || !(await comparePassword(password, response.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(response.id);
    
    res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true });
    res.status(200).json({ status: 'success', token });
})

module.exports = router;