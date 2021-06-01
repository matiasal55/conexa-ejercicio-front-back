const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controller/users.controller');
const { loginValidator, registerValidator } = require('../middlewares/validator');

router.post('/login', loginValidator, loginUser);

router.post('/register', registerValidator, registerUser);

module.exports = router;
