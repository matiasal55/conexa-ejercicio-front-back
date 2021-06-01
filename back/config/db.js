const mongoose = require('mongoose');
const user = require('../seeders/users.seeder');
require('dotenv').config();

const URI = process.env.DB_URI;

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((db) => console.log('Conectado a Mongo'))
    .catch((e) => console.log('Error de conexion'));

user.save()
    .then((res) => console.log('Usuario usuario@correo.com creado por defecto'))
    .catch((err) => console.log('Usuario creado previamente'));
