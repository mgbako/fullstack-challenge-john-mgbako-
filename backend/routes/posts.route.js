const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'List of Post',
    status: true
  });
})

module.exports = router;