const { hash } = require('bcryptjs');
const {generateOTP} = require('../utils/getotp');
const {sendOTPEmail} = require('../utils/mailservice');
const {comparePassword}  = require('../utils/hash');

const otpStorage = {}; // Temporary in-memory store. Use Redis or DB in production.

app.post('/send-otp', async (req, res) => {
  const { email } = req.cookies.email;s

  // Find the user by email
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Generate OTP
  const otp = generateOTP();

  // Store OTP with an expiration time (e.g., 10 minutes)
  otpStorage[email] = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };

  // Send OTP via email
  await sendOTPEmail(email, otp);

  res.json({ token: hash(otp, 10) }); // Return a hashed version of OTP as a token
});


app.post('/verify-otp', async (req, res) => {
    const { token, otp } = req.body;
  
    // Check if OTP exists and is still valid
    if (!otpStorage[email] || otpStorage[email].expiresAt < Date.now()) {
      return res.status(400).json({ message: 'OTP expired or invalid' });
    }
  
    // Verify the OTP
    if (!comparePassword(otp, token)) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  
    // OTP is valid, proceed with further actions
    // For example: Mark the user as verified or authenticated
    delete otpStorage[email]; // Clear OTP after successful verification
  
    res.json({ message: 'OTP verified successfully' });
  });
  

  module.exports = router;