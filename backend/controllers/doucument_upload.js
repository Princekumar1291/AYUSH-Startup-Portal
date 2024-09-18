const express = require('express');
const router = express.Router();
const cloudinary = require('../cloudinaryConfig'); // Import the Cloudinary config

// Upload endpoint
router.post('/upload', async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path); // Use req.file.path if you are using multer for file upload
    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
