const bcrypt = require('bcrypt');

const encryptKey = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const newPassword = bcrypt.hash(password, salt);
    return newPassword;
};

const validateKey = async (password, realPassword) => {
    return bcrypt.compare(password, realPassword);
};

module.exports = { encryptKey, validateKey };
