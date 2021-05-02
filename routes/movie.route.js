const express = require('express')
const router = express.Router()

const movie_controller = require('../controllers/movie.controller')

router.get('/test', movie_controller.test);

module.exports = router;
