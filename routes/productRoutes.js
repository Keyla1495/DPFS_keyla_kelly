const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

// Ruta para la lista de productos
router.get('/', productController.index);

// Ruta para el detalle de un producto (usando un parámetro dinámico ":id")
router.get('/:id', productController.detalle);


module.exports = router;



