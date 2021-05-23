const db = require('../models/index');

const getUserForLogin = async (data) => {
    const request = await db.User.findOne({
        where: {
            email: data.email,
        },
    });
    return request;
};

module.exports = { getUserForLogin };
