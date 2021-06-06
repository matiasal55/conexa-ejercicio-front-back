const { error } = require('./general.messages');

const internalError = (res) => error(res, 'Internal Error', 500);

const verifyError = (res, message, condition, responseMsg, status) => {
    if (message.includes(condition)) {
        return error(res, responseMsg, status);
    }
    return internalError(res);
};

module.exports = { verifyError };
