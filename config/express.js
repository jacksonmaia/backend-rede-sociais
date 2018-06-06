// config/express.js
var express = require('express');
var UserRouter = require('../app/routes/usuarios.js');
var PostRouter = require('../app/routes/posts.js');
let bodyParser = require('body-parser');
const path = require('path');

module.exports = function () {
    var app = express();
    app.set("port"
        , 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    UserRouter(app);
    PostRouter(app);
    return app;
    
}