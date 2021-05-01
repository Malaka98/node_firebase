const express = require('express');
router = express.Router();
const { hello, hello2 } = require('../controllers/hello');

router.get('/', hello)

router.post('/test', hello2)

module.exports = router