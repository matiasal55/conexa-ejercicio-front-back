const db = require('../models/index');

const getUserForLogin = async (data) => {
    const request = await db.User.findOne({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    return request;
};

module.exports = { getUserForLogin };
