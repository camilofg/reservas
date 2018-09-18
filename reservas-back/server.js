const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../reservas-front/dist/reservas-front')));
app.use(express.static(path.join(__dirname, '/../reservas-front/dist/Images')));

app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require('./server/routes/login-service'); //importing route
routes(app); //register the route

app.listen(8080, () => {
    console.log("Server up on port 8080");
});

// var server = http.createServer(function(req, res) {
//     console.log("Server up on port 8080");
// res.writeHead(200);
// res.end('Hi everybody!');
// });
// server.listen(8080);