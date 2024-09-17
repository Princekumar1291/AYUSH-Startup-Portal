const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env

// Set up a Nodemailer transporter with Brevo SMTP service credentials
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Use Brevo SMTP host
  port: 587, // Use Brevo SMTP port (587 is typically for STARTTLS)
  secure: false, // Use STARTTLS, not SSL (so set secure to false)
  auth: {
    user: "7c39a9002@smtp-brevo.com", // Brevo email from env variable
    pass: "BWOgDPk2G73MjUHb",  // Brevo SMTP password from env variable
  },
});

async function sendOTPEmail(email, otp) {

    console.log(email,otp);
  const mailOptions = {
    from: process.env.EMAIL_USER, // Use the email from env variable
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendOTPEmail };
