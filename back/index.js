const app = require('./app');
const dbConnection = require('./config/database');
require('dotenv').config();

dbConnection();

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {
    console.log('Connected to server to port ' + port);
});
