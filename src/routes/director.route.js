const { getAll, create, getOne, remove, update } = require('../controllers/director.controllers');
const express = require('express');

const directorRoute = express.Router();

directorRoute.route('/directors')
    .get(getAll)
    .post(create);

directorRoute.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directorRoute;