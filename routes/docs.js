const express = require('express');
const router = express.Router();


// @route     GET /docs
// @desc      simple ez docs
router.get('/docs', async (req, res) => {
  try {
    res.send('POST request to ovre.tk/api/url/shorten with longUrl: "urlhere"')
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;