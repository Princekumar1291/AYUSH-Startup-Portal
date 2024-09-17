const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env

// Set up a Nodemailer transporter with Brevo SMTP service credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Use Brevo SMTP host
  port: process.env.SMTP_PORT, // Use Brevo SMTP port (587 is typically for STARTTLS)
  secure: false, // Use STARTTLS, not SSL (so set secure to false)
  auth: {
    user: process.env.EMAIL_USER, // Brevo email from env variable
    pass: process.env.EMAIL_PASS,  // Brevo SMTP password from env variable
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
