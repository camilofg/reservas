// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const express = require('express');
// const router = express.Router();

const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users', usersController.create);

  //app.post('/api/login'. usersController.retrieve);

  app.post('/api/login', usersController.list);

  //app.post('/api/users/:mail', usersController.retrieve);
};