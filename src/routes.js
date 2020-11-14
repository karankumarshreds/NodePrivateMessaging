const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ OK: 'OK' })
});

module.exports = router;