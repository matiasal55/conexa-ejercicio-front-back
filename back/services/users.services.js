const { getUserForLogin } = require('../repositories/users.repository');
const { generateToken } = require('./jwt');

const login = async (data) => {
    const request = await getUserForLogin(data);
    if (request) {
        const token = generateToken(data.email);
        const user = {
            user: request,
            token,
        };
        return user;
    }
    return request;
};

module.exports = { login };
