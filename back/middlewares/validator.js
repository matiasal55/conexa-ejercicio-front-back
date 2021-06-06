const { check } = require('express-validator');

const generalValidator = (name, alternativeName = name) => check(name).notEmpty().trim().withMessage(`${alternativeName} no puede estar vacío`);

const loginValidator = [
    generalValidator('email')
        .isLength({ min: 7 })
        .withMessage('El email debe tener mas caracteres')
        .isEmail()
        .withMessage('El formato no corresponde a un email'),
    generalValidator('password').isLength({ min: 4 }).withMessage('La password debe tener mas caracteres').isString(),
];

const registerValidator = [
    ...loginValidator,
    generalValidator('firstName', 'nombre')
        .isString()
        .isAlpha()
        .withMessage('El nombre no tiene un formato válido')
        .isLength({ min: 2, max: 20 })
        .withMessage('El nombre debe tener más caracteres'),
    generalValidator('lastName', 'apellido')
        .isString()
        .isAlpha()
        .withMessage('El apellido no tiene un formato valido')
        .isLength({ min: 2, max: 20 })
        .withMessage('El apellido debe tener más caracteres'),
    generalValidator('repassword').isLength({ min: 4 }).withMessage('La password debe tener mas caracteres').isString(),
];

module.exports = { loginValidator, registerValidator };
