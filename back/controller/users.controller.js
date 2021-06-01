const { validationResult } = require('express-validator');
const { login } = require('../services/users.services');

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
    }
    const data = req.body;
    const user = await login(data);
    if (user) {
        user.user.password = null;
        user.user._id = null;
        return res.status(200).json(user);
    } else res.json(null);
};

module.exports = { loginUser };
