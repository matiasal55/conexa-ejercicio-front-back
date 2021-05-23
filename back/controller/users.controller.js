const { login } = require('../services/users.services');

const loginUser = async (req, res) => {
    const data = req.body;
    const request = await login(data);
    return res.status(200).json(request);
};

module.exports = { loginUser };
