const Court_Images = require('../models').CourtImage;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../../config/config');

module.exports = {
    list(req, res){
        let court = req.params.courtId;
    return Court_Images
      .findAll({
        attributes: ['fileName'],
        where: {courtId: court}
      })
      .then(court => res.status(201).send(court))
      .catch(error => res.status(400).send(error));
    },
    getAll(req, res){
    return Court_Images
      .findAll({
        attributes: ['fileName', 'courtId']
      })
      .then(court => res.status(201).send(court))
      .catch(error => res.status(400).send(error));
    }
}