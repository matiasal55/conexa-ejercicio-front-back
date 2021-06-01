const { getUserForLogin, saveUser } = require('../repositories/users.repository');
const { generateToken } = require('./jwt');
const { validateKey } = require('../middlewares/encrypt');

const login = async (data) => {
    const request = await getUserForLogin(data);
    if (request) {
        const isValidPassword = await validateKey(data.password, request.password);
        if (!isValidPassword) return null;
        request.password = null;
        request._id = null;
        const user = getToken(request);
        return user;
    }
    return request;
};

const register = async (data) => {
    delete data.repassword;
    const request = await saveUser(data);
    if (request) {
        request.password = null;
        request._id = null;
        const user = getToken(request);
        return user;
    }
    return request;
};

const getToken = (data) => {
    const token = generateToken(data.email);
    const user = {
        user: data,
        token,
    };
    return user;
};

module.exports = { login, register };
