const { verifyError } = require('./external.messages');

const possibleUserExists = (res, message) => {
    const condition = 'E11000';
    const responseMsg = 'User data already exists';
    return verifyError(res, message, condition, responseMsg);
};

module.exports = { possibleUserExists };
