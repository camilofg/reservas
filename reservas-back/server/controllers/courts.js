//const Place = require('../models').Place;
const Court = require('../models').Court;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../../config/config')
//../public/src/app/config/config');
//const VerifyToken = require('../public/src/app/login/verifyToken');

module.exports = {
    create(req, res){
        return Court
        .create({
            name: req.body.name,
            players: req.body.players,
            roofed: req.body.roofed,
            illuminated: req.body.illuminated
        })
        .then(court => res.status(201).send(court))
        .catch(error => res.status(400).send(error));
    },
    list(req, res){
        return Court.findAll({
        })
        .then(court => res.status(201).send(court))
        .catch(error => res.status(400).send(error));
    }
}