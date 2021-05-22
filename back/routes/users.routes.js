const express = require('express');
const router = express.Router();
const { loginUser } = require('../controller/users.controller');

router.post('/login', loginUser);

module.exports = router;
