const { validationResult } = require('express-validator');
const { login, register } = require('../services/users.services');
const { success, error, defineError } = require('../messages/resMessages');

const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return error(res, errors);
        }
        const data = req.body;
        const user = await login(data);
        if (!user) return error(res, 'Incorrect user or password');
        return success(res, user);
    } catch (e) {
        return error(res, 'Internal Error', 500);
    }
};

const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return error(res, errors);
        }
        const data = req.body;
        if (data.password !== data.repassword) return error(res, 'Las contraseñas no coinciden');
        const user = await register(data);
        return success(res, user, 201);
    } catch (e) {
        defineError(res, e.message, 'E11000', 'User data already exists', 400);
    }
};

module.exports = { loginUser, registerUser };
