const express = require('express');
const router = express.Router();


// @route     GET /shorten
// @desc      Shorten links
router.get('/shorten', async (req, res) => {
  try {
      res.sendFile('../html/form.html')
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;