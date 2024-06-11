const { getAll, create, getOne, remove, update, setmovieGenres, setmovieActors, setmovieDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const movieRoute = express.Router();

movieRoute.route('/movies')
    .get(getAll)
    .post(create);

movieRoute.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRoute.route('/movies/:id/genres')
    .post(setmovieGenres);

movieRoute.route('/movies/:id/actors')
    .post(setmovieActors);

movieRoute.route('/movies/:id/directors')
    .post(setmovieDirectors);
module.exports = movieRoute;