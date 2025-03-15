const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const multer = require('multer');
const path = require('path');

// Configuración de multer para guardar imágenes en la carpeta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Usar la carpeta 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombrar archivo para evitar duplicados
  },
});

const upload = multer({ storage });


// Rutas de productos
router.get('/', productController.listProducts);

// Ruta para mostrar el formulario de creación de producto
router.get('/create', productController.showCreateForm);

// Ruta para manejar la creación del producto
router.post('/create', upload.single('image'), productController.createProduct);

// Ruta para mostrar el formulario de edición de producto
router.get('/edit/:id', productController.showEditForm);

// Ruta para manejar la edición del producto
router.post('/edit/:id', upload.single('image'), productController.editProduct);

// // Ruta para manejar la edición del producto
// router.post('/edit/:id', upload.single('image'), productController.editProduct);

// Ruta para ver los detalles de un producto
router.get('/:id', productController.showProductDetail);

// Ruta para eliminar un producto
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;