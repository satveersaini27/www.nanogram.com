const express = require('express');
const router = express.Router();
const { generateCaption } = require('../controllers/aiController');
const auth = require('../middleware/auth');

// Generate caption for an image
router.post('/caption', auth, generateCaption);

// Apply AI filter to image
router.post('/apply-filter', auth, (req, res) => {
  // Implement AI filter application
});

module.exports = router;