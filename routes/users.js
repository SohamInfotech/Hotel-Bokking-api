const express = require('express');
const router = express.Router();
const UC = require('../controller/userC');

router.post('/singup', UC.Singup)
router.post('/login', UC.Login)

module.exports = router;

