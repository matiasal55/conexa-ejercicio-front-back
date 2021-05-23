const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const generateToken = (email) => {
    const token = jwt.sign({ email }, secret, {
        expiresIn: 60 * 60,
    });
    return token;
};

module.exports = { generateToken };
