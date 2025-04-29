const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/multerConfig');

// Rutas de productos
router.get('/', productController.index);

// Mostrar formulario de creación
router.get('/create', productController.createForm);

// Crear producto
router.post('/create', upload.single('image'), productController.create);

// Mostrar formulario de edición
router.get('/edit/:id', productController.editForm);

// Actualizar producto
router.post('/edit/:id', upload.single('image'), productController.update);

// Ver detalles de un producto
router.get('/:id', productController.detail);

// Eliminar producto
router.delete('/products/delete/:productId', productController.deleteProduct);

module.exports = router;
