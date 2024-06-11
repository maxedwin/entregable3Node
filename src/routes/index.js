const express = require('express');
const genreRoute = require('./genre.route');
const actorRoute = require('./actor.route');
const directorRoute = require('./director.route');
const movieRoute = require('./movie,route');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRoute);
router.use(actorRoute);
router.use(directorRoute);
router.use(movieRoute);

module.exports = router;