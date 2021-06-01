const User = require('../models/User');

const userSeeder = new User({
    firstName: 'Usuario',
    lastName: 'Usuario',
    email: 'usuario@correo.com',
    password: '12345',
});

module.exports = userSeeder;
