import * as yup from 'yup';

const textValidate = (message) => {
    return yup.string('Solo caracteres alfabeticos').required(message).trim();
};

const emailValidate = (message = 'Debe ingresar un email válido') => {
    return yup.string().email('El formato de email es inválido').trim().required(message);
};

const passwordValidate = (message = 'Debe ingresar una contraseña') => {
    return textValidate(message);
};

export const registerValidate = () =>
    yup.object().shape({
        firstName: textValidate('Debe ingresar su nombre'),
        lastName: textValidate('Debe ingresar su apellido'),
        email: emailValidate(),
        password: passwordValidate(),
        repassword: passwordValidate('Debe reingresar la contraseña'),
    });

export const loginValidate = () =>
    yup.object().shape({
        email: emailValidate(),
        password: passwordValidate(),
    });
