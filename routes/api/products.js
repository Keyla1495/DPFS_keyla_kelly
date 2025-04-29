// routes/productRoutes.js
const express = require('express');
const { getAllProducts, getProductById } = require('../../controllers/productApiController');
const router = express.Router();

// Rutas para productos
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
