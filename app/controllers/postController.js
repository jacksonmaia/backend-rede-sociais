var Usuario = require('../models/usuarioModel.js');
var Post = require('../models/postModel.js');
let jwt = require('jsonwebtoken');

module.exports.listaPosts = function(req, res){
    let promise = Post.find().populate('usuarios').exec();

    let payload = jwt.decode(req.query.token);    
    promise = promise.find({'usuario': payload.id});

    promise.then(
        function (posts) {
            res.json(posts);
        }
    ).catch(
        function(){
            res.status(404).send('Nao existe');
        }
    )
};
module.exports.obterPost = function(req, res){
    var id = req.params.id;
    let promise = Post.findById(id);

    promise.then(
        function(posts) {
            res.status(201).json(posts);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
 };

module.exports.inserirPost = function(req, res){
    let promise = Post.create(req.body)
    promise.then(
        function(posts) {
            res.status(201).json(posts);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
}
module.exports.deletePost = function(req, res){
    var id = req.params.id;
    let promise = Post.remove({"_id":id});
    promise.then(
        function(posts) {
            res.status(201).json(posts);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    );
}
module.exports.atualizarPost = function(req, res){
    let id = req.params.id;
    let post = new Post({
        texto: req.body.texto,
        likes: req.body.likes,
        uid: req.body.uid
    });
    let promise = Post.findByIdAndUpdate(id, post);
    promise.then(
        function(post1){ 
            res.json(post1);
        }
    ).catch(
        function(error){
            res.status(404).send('Não Encontrado');
        }
    );


}
// module.exports.obterUsuarioPosts = function(req, res){
    
// }