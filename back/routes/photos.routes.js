const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controller/photos.controller');

router.get('/', getPhotos);

module.exports = router;
