const User = require('../models').Users;
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const config = require('../../../config/config')
//../public/src/app/config/config');
//const VerifyToken = require('../public/src/app/login/verifyToken');

module.exports = {
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        mail: req.body.mail,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    let usuario = req.body;
    let passwd = usuario.password;

    if (usuario.mail && (typeof usuario.mail === 'string') && passwd) {
      return User
      .findAll({
        where: {mail: usuario.mail}
      })
      .then(user => //res.status(200).send(user))
        {
          try{
              let userSession = JSON.parse(JSON.stringify(user));
              console.log("user in session: ", userSession[0]);
              //console.log("user: ", user);
              console.log("user pass: ", passwd);
              console.log("user pass bd: ", userSession[0].password);
              
              var passwordIsValid = bcrypt.compareSync(passwd, userSession[0].password);
              console.log("valid: ", passwordIsValid);
              if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
              // if user is found and password is valid  create a token
              var token = jwt.sign({ id: user._id }, config.secret.replace(/['"]+/g, ''), {
                  expiresIn: 86400 // expires in 24 hours
              });
              res.status(200).send({ 
                auth: true, 
                token: token
              });
            } catch (error) {
              // TODO
              console.log('Exception while login:', error);
          }
        })
      .catch(error => res.status(400).send(error));
    }
    // return User
    //   .all()
    //   .then(users => res.status(200).send(users))
    //   .catch(error => res.status(400).send(error));
  },
  retrieve(req, res){
    return User
    .findAll({
      where: {mail: req.params.mail}
    })
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
  },
  // validate(req, res){
  //   let usuario = req.body;
  //   let passwd = usuario.password;

  //   if (name && (typeof usuario.mail === 'string') && passwd) {
  //     return User
  //     .findAll({
  //       where: {mail: usuario.mail}
  //     })
  //     .then(user => function(){
  //           if (!bcrypt.compareSync(passwd, user.password)) return res.status(401).send({ auth: false, token: null });
  //           // if user is found and password is valid  create a token
  //           var token = jwt.sign({ id: user._id }, config.secret.replace(/['"]+/g, ''), {
  //               expiresIn: 86400 // expires in 24 hours
  //           });
  //           res.status(200).send({ 
  //             auth: true, 
  //             token: token
  //           });
  //         }
  //       )
  //     .catch(error => res.status(400).send(error));
  //   }
  // }
};