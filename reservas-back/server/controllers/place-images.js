const Place_Images = require('../models').PlaceImage;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../../config/config');

module.exports = {
    list(req, res){
        let place = req.params.placeId;
    return Place_Images
      .findAll({
        attributes: ['fileName'],
        where: {placeId: place}
      })
      .then(place => res.status(201).send(place))
      .catch(error => res.status(400).send(error));
    },
    getAll(req, res){
    return Place_Images
      .findAll({
        attributes: ['fileName']
      })
      .then(place => res.status(201).send(place))
      .catch(error => res.status(400).send(error));
    }
}