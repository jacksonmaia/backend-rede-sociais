let PostController = require('../controllers/postController')
let auth = require('../controllers/auth')

module.exports = function(app){
    app.use('/api/posts', auth.verificarToken);

    app.post('/api/posts', PostController.inserirPost);

    app.get("/api/posts" , PostController.listaPosts);
    
    app.put("/api/posts/:id" , PostController.atualizarPost);
    
    app.get("/api/posts/:id", PostController.obterPost);
    
    app.delete("/api/delete/:id", PostController.deletePost);
    
    // app.get("/api/posts/:id/usuario", PostController.obterUsuarioPosts);


}