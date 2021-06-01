const express = require('express');
const router = express.Router();
const { loginUser } = require('../controller/users.controller');
const { loginValidator } = require('../middlewares/validator');

router.post('/login', loginValidator, loginUser);

module.exports = router;
