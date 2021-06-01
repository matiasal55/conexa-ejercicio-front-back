const { validationResult } = require('express-validator');
const { login } = require('../services/users.services');
const { success, error } = require('../messages/resMessages');

const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return error(res, errors);
        }
        const data = req.body;
        const user = await login(data);
        if (!user) return error(res, 'Incorrect user or password');
        user.user.password = null;
        user.user._id = null;
        return success(res, user);
    } catch (e) {
        return error(res, 'Internal Error', 500);
    }
};

module.exports = { loginUser };
