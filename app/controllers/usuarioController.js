// app/controllers/usuarioController.js
var Usuario = require('../models/usuarioModel.js');
var Post = require('../models/postModel.js');

module.exports.listaUsuarios = function(req, res){
    let promise = Usuario.find().populate('posts').exec();
    if(req.query.nome){
        let nome = nome;
        promisse = promisse.find({nome:{'Seq':nome}});
    }
    if(req.query.email){
        let email = email;
        promisse = promisse.find({email:{'Seq':email}});
    }
    promise.then(
        function(usuarios) {
            res.status(201).json(usuarios);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
};
module.exports.obterUsuario = function(req, res){
    var id = req.params.id;
    let promise = Usuario.findById(id);

    promise.then(
        function(usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
 };

module.exports.inserirUsuario = function(req, res){
    let promise = Usuario.create(req.body)
    promise.then(
        function(usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
}
module.exports.deleteUsuario = function(req, res){
    var id = req.params.id;
    let promise = Usuario.remove({"id":id});
    promise.then(
        function(usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
}
module.exports.atualizarUsuario = function(req, res){
    var id = req.params.id;
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    let promise = Usuario.findByIdAndUpdate(id,usuario);
    promise.then(
        function(usuario2) {
            res.status(201).json(usuario2);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );


}
module.exports.obterPostsDoUsuario = function(req, res){
    var id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function(usuario) {
            let promiseee = Post.find({"uid": usuario._id});
            promiseee.then(
                function(posts) {
                    res.status(201).json(posts);
                }
            ).catch(
                function(erro){
                    res.status(500).json(erro);
                }
            );   
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
}