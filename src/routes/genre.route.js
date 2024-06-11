const { getAll, create, getOne, remove, update } = require('../controllers/genre.controllers');
const express = require('express');

const genreRoute = express.Router();

genreRoute.route('/genres')
    .get(getAll)
    .post(create);

genreRoute.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genreRoute;