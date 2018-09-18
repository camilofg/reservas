const usersController = require('../controllers').users;
const placesController = require('../controllers').places;
const courtsController = require('../controllers').courts;
const courtImagesController = require('../controllers').courtImages;
const placeImagesController = require('../controllers').placeImages;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/users', usersController.create);

  app.post('/api/login', usersController.list);

  app.post('/api/places', placesController.create);

  app.get('/api/places', placesController.list);

  app.post('/api/courts', courtsController.create);

  app.get('/api/courts', courtsController.list);

  app.get('/api/courtImages/:courtId', courtImagesController.list);

  app.get('/api/courtImages/', courtImagesController.getAll);

  app.get('/api/placeImages/:placeId', placeImagesController.list);

  app.get('/api/placeImages/', placeImagesController.getAll);
};