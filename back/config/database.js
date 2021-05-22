const { Sequelize } = require('sequelize');
const { database } = require('./config');

const sequelize = new Sequelize(database.dbName, database.user, database.password, {
    host: database.host,
    dialect: 'mysql',
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to database');
    } catch (e) {
        console.log('Connection Error');
    }
};

module.exports = connection;
