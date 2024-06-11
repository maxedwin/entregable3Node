const { getAll, create, getOne, remove, update } = require('../controllers/actor.controllers');
const express = require('express');

const actorRoute = express.Router();

actorRoute.route('/actors')
    .get(getAll)
    .post(create);

actorRoute.route('/actors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = actorRoute;