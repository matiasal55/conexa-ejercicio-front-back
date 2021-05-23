const { login } = require('../services/users.services');

const loginUser = async (req, res) => {
    const data = req.body;
    const user = await login(data);
    if (user) return res.status(200).json({ user, token: 0 });
    else res.status(400).json(null);
};

module.exports = { loginUser };
