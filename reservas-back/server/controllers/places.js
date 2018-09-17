const Place = require('../models').Place;
const Courts = require('../models').Courts;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../../config/config')
//../public/src/app/config/config');
//const VerifyToken = require('../public/src/app/login/verifyToken');

module.exports = {
    create(req, res){
        return Place
        .create({
            name: req.body.name,
            mail: req.body.mail,
            address: req.body.address,
            phone: req.body.phone,
            cellphone: req.body.cellphone,
            whatsapp: req.body.whatsapp
        })
        .then(place => res.status(201).send(place))
        .catch(error => res.status(400).send(error));
    },
    list(req, res){
        return Place.findAll({
        })
        .then(place => res.status(201).send(place))
        .catch(error => res.status(400).send(error));
    }
}