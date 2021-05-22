const express = require('express');
const logger = require('morgan');

const postsRouter = require('./routes/posts.routes');
const photosRouter = require('./routes/photos.routes');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/photos', photosRouter);

app.use((req, res) => {
    res.status(400).json({ message: 'Bad request' });
});

module.exports = app;
