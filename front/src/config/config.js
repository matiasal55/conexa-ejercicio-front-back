const dotenv = require('dotenv');
const config = dotenv.config();

module.exports = {
    server: process.env.REACT_APP_BACKEND,
    users: process.env.REACT_APP_USERS,
};
