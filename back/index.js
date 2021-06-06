const app = require('./app');
require('dotenv').config();
require('./config/db');

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log('Connected to server to port ' + port);
});
