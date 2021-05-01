const express = require('express'),
router = express.Router(),
hello = require('../controllers/hello')

router.get('/', hello.hello)

router.post('/test', hello.hello2)

module.exports = router