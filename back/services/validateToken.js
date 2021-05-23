const { decodedToken } = require('./jwt');

const validateToken = (token) => {
    const validate = decodedToken(token);
    return validate;
};

module.exports = { validateToken };
