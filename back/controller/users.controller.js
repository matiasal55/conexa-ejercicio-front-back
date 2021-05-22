const { login } = require('../services/users.services');

const loginUser = (req, res) => {
    const data = req.body;
    const request = login(data);
    return res.status(200).json(request);
};

module.exports = { loginUser };
