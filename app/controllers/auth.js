let Usuario = require('../models/usuarioModel.js')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')


module.exports.logar = function (req, res) {
    let promise = Usuario.findOne({ email: req.body.email }).exec();
    promise.then(
        function (usuario) {
            if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
                let token = jwt.sign({ id: usuario._id }, 'senha');
                res.status(200).json({
                    id: usuario._id,
                    token: token,
                    message: 'Logado!!!!'
                });
            } else {
                res.status(401).send('Login inválido!!!!')
            }
        }
    ).catch(
        function () {
            res.status(401).send('Login inválido!!!!')
        }
    )
}


module.exports.verificarToken = function (req, res, next) {
        jwt.verify(req.query.token, 'secret', function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    title: 'Not Authenticated',
                    error: err
                });
            }
            next();
        })
}