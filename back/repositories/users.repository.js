const UserModel = require('../models/User');

const getUserForLogin = async (data) => {
    const request = UserModel.findOne({ email: data.email });
    return request;
};

const saveUser = async (data) => {
    const user = new UserModel(data);
    const request = await user.save();
    return request;
};

module.exports = { getUserForLogin, saveUser };
