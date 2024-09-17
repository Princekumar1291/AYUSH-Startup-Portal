const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env

// Set up a Nodemailer transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use any other email service
  auth: {
    user: process.env.EMAIL_USER, // Email from environment variable
    pass: process.env.EMAIL_PASS,  // Password from environment variable
  },
});

async function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the email from env variable
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
}


module.exports = { sendOTPEmail };