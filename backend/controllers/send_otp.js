const { hash } = require('bcryptjs');
const express = require('express');
const prisma = require('../config/db');

const {generateOTP} = require('../utils/getotp');
const {sendOTPEmail} = require('../utils/mailservice');
const {comparePassword}  = require('../utils/hash');
const {generateToken} = require('../utils/jwt');

const router = express.Router();

const otpStorage = {}; // Temporary in-memory store. Use Redis or DB in production.
router.post('/send-otp', async (req, res) => {
  const { email } = req.cookies.email;s



  // Find the user by email
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Generate OTP

  const otp = generateOTP();

  otpStorage[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

  await sendOTPEmail(email, otp);

  res.json({ token: await hash(otp, 10) }); // Return a hashed version of OTP as a token
});


router.post('/verify-otp', async (req, res) => {
    const { token, otp,email } = req.body;
  
    if (!otpStorage[email] || otpStorage[email].expiresAt < Date.now()) {
      return res.status(400).json({ message: 'OTP expired or invalid' });
    }
  
    if (!comparePassword(otp, token)) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  

    delete otpStorage[email]; // Clear OTP after successful verification

    const resp = await prisma.user.findUnique({ where: { email } });

    const tok = await generateToken(resp.id);

    res.cookie("token", tok, {
        httpOnly: false,  // Set to false if you need to access it in the frontend
        sameSite: "Lax",
        secure: false,    // Use true for production with HTTPS
      });

    delete otpStorage[email]; 

  
    res.json({ message: 'OTP verified successfully' });
  });
  

  module.exports = router;