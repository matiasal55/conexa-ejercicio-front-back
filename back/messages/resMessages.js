const { verifyError } = require('./external.messages');

const possibleUnathorizedAccess = (res, message) => {
    const status = 401;
    const condition = 'jwt';
    const responseMsg = 'Not Authorized';
    return verifyError(res, message, condition, responseMsg, status);
};

const possibleDataEntryError = (res, message) => {
    const condition = 'campos';
    const responseMsg = 'Campos ingresados incorrectos';
    return verifyError(res, message, condition, responseMsg);
};

const possibleUserExists = (res, message) => {
    const condition = 'E11000';
    const responseMsg = 'User data already exists';
    return verifyError(res, message, condition, responseMsg);
};

module.exports = { possibleUnathorizedAccess, possibleDataEntryError, possibleUserExists };
