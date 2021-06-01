const UserModel = require('../models/User');

const getUserForLogin = async (data) => {
    const request = UserModel.findOne({ email: data.email, password: data.password });
    return request;
};

module.exports = { getUserForLogin };
