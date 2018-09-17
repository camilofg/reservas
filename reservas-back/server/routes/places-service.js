// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const express = require('express');
// const router = express.Router();

const placesController = require('../controllers').places;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/places', placesController.create);

  //app.post('/api/login'. usersController.retrieve);

  app.post('/api/places', placesController.list);

  //app.post('/api/users/:mail', usersController.retrieve);
};