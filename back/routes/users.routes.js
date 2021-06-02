const express = require('express');
const router = express.Router();
const { loginUser, registerUser, recoveryUser } = require('../controller/users.controller');
const { loginValidator, registerValidator } = require('../middlewares/validator');

router.post('/login', loginValidator, loginUser);

router.get('/recoveryData', recoveryUser);

router.post('/register', registerValidator, registerUser);

module.exports = router;
