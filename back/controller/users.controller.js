const { login } = require('../services/users.services');

const loginUser = async (req, res) => {
    const data = req.body;
    const user = await login(data);
    if (user) {
        user.user.password = null;
        return res.status(200).json(user);
    } else res.json(null);
};

module.exports = { loginUser };
