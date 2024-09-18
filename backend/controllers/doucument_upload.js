const express = require('express');
const router = express.Router();
const cloudinary = require('../cloudinaryConfig'); // Import the Cloudinary config
const multer = require('multer'); // Multer for handling file uploads
const path = require('path');

// Configure multer for file uploads (store files temporarily)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // You can specify any folder for temporary storage
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save with original extension and a timestamp
  }
});

const upload = multer({ storage: storage });

// Upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Send the Cloudinary response
    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
