const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
// const { title } = require('process');

// Ruta para mostrar los libros
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo de productos');
        }

        const libros = JSON.parse(data); // Convertimos el JSON a objeto JavaScript
        res.render('products/libros', { products: libros, title: "Libros" }); // Renderizamos la vista pasando los libros
    });
});
// Ruta para mostrar un libro específico por ID
router.get('/:id', (req, res) => {
    const libroId = req.params.id; // Obtener el ID del libro desde la URL

    fs.readFile(path.join(__dirname, '../data/products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo de productos');
        }

        const libros = JSON.parse(data); // Convertir JSON en objeto JS
        const product = libros.find(l => l.id == libroId); // Buscar el libro por ID

        if (!product) {
            return res.status(404).send('Libro no encontrado'); // Manejar error si no existe
        }

        res.render('products/productDetail', { product, title: "Detalle del Producto" }); // Enviar 'product' a la vista
    });
});




module.exports = router;
