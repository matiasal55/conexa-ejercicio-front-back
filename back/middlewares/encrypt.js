const bcrypt = require('bcrypt');
require('dotenv').config();

const encryptKey = async (password) => {
    const numberOfSalt = parseInt(process.env.SALT);
    const salt = await bcrypt.genSalt(numberOfSalt);
    const newPassword = bcrypt.hash(password, salt);
    return newPassword;
};

const validateKey = async (password, realPassword) => {
    return bcrypt.compare(password, realPassword);
};

module.exports = { encryptKey, validateKey };
