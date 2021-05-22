const { getUserForLogin } = require('../repositories/users.repository');

const login = (data) => {
    const request = getUserForLogin(data);
    return request;
};

module.exports = { login };
