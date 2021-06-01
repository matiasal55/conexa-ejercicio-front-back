const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_URI;

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log('Conectado a Mongo'))
    .catch((e) => console.log('Error de conexion'));
