const { check } = require('express-validator');

const generalValidator = (name) => check(name).notEmpty().trim().withMessage(`El ${name} no puede estar vacío`);

const loginValidator = [
    generalValidator('email')
        .isLength({ min: 7 })
        .withMessage('El email debe tener mas caracteres')
        .isEmail()
        .withMessage('El formato no corresponde a un email'),
    generalValidator('password').isLength({ min: 4 }).withMessage('La password debe tener mas caracteres').isString(),
];

module.exports = { loginValidator };
