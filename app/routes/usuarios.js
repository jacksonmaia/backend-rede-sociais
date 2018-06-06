// app/route/usuarios.js
let UserController = require("../controllers/usuarioController.js");
let auth = require('../controllers/auth')

module.exports = function(app){
    app.post('/api/usuarios', UserController.inserirUsuario);
    

    app.post('/api/usuarios/signin', auth.logar);


    app.use('/api/usuarios', auth.verificarToken);

    app.get("/api/usuarios" ,UserController.listaUsuarios);
    
    app.put("/api/usuarios/:id" ,UserController.atualizarUsuario);
    
    app.get("/api/usuarios/:id", UserController.obterUsuario);
    
    app.delete("/api/delete/:id", UserController.deleteUsuario);
    
    app.get("/api/usuarios/:id/posts", UserController.obterPostsDoUsuario);


}