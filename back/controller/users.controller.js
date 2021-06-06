const { validationResult } = require('express-validator');
const { login, register, dataUser } = require('../services/users.services');
const { success, error } = require('../messages/general.messages');
const { possibleUnathorizedAccess, possibleDataEntryError } = require('../messages/resMessages');
const { possibleUserExists } = require('../messages/users.messages');
const { validateToken } = require('../services/validateToken');

const verifyValidation = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error('Error de llenado de campos');
    }
};

const loginUser = async (req, res) => {
    try {
        const errors = verifyValidation(req);
        const data = req.body;
        const user = await login(data);
        if (!user) return error(res, 'Incorrect user or password');
        return success(res, user);
    } catch (e) {
        return possibleDataEntryError(res, e.message);
    }
};

const registerUser = async (req, res) => {
    try {
        const errors = verifyValidation(req);
        const data = req.body;
        if (data.password !== data.repassword) return error(res, 'Las contraseñas no coinciden');
        const user = await register(data);
        return success(res, user, 201);
    } catch (e) {
        if (e.message && e.message.includes('campos')) {
            return possibleDataEntryError(res, e.message);
        }
        return possibleUserExists(res, e.message);
    }
};

const recoveryUser = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const user = await dataUser(isValid.email);
        return success(res, { user, token });
    } catch (e) {
        return possibleUnathorizedAccess(res, e.message);
    }
};

module.exports = { loginUser, registerUser, recoveryUser };
