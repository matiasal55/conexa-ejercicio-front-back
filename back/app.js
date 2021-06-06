const express = require('express');
const logger = require('morgan');
const { error } = require('./messages/general.messages');
const postsRouter = require('./routes/posts.routes');
const photosRouter = require('./routes/photos.routes');
const usersRouter = require('./routes/users.routes');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/photos', photosRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
    error(res, 'Bad Request');
});

module.exports = app;
