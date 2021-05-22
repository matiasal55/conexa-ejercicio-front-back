const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controller/photos.controller');

router.get('/:page', getPhotos);

module.exports = router;
