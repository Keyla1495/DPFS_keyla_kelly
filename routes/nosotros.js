var express = require("express");
var router = express.Router();

var nosotrosController = require('../controllers/nosotrosController')


//Aqui las rutas
router.get('/',nosotrosController.index);
router.get('/id/:id', nosotrosController.show);
router.get('/nosotros', nosotrosController.create);


// router.get('/id/:id/comments/:commentsId?', function (req,res) {
//     return res.send(´Estamos en el detalle de la pelicula: ${req.params.id} . La pelicula tiene comentarios:  ${req.params.commentsId}´)    
// })

module.exports = router;
