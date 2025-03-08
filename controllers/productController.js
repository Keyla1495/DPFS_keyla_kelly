// const fs = require('fs');
// const path = require('path');
// const productsFilePath = path.join(__dirname, '../data/products.json');
const { Product } = require('../models'); // Importamos el modelo Product

// Mostrar todos los productos
exports.listProducts = async (req, res) => {
  try {
    const libros = await Product.findAll(); // Obtiene todos los productos de la BD
    res.render('products/libros', { libros });
  } catch (err) {
    console.error("Error al obtener productos:", err);
    res.status(500).send('Error al obtener productos');
  }
};

// Mostrar el formulario de creación
exports.showCreateForm = (req, res) => {
  res.render('products/createProduct');
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, category, autor, precio } = req.body;
    const image = req.file ? req.file.filename : ''; // Guardamos solo el nombre de la imagen

    await Product.create({
      name,
      description,
      category,
      autor,
      precio: Number(precio),
      image,
    });

    res.redirect('/products');
  } catch (err) {
    console.error("Error al crear el producto:", err);
    res.status(500).send('Error al crear el producto');
  }
};

// Mostrar el formulario de edición
exports.showEditForm = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    res.render('products/editProduct', { product });
  } catch (err) {
    console.error("Error al obtener el producto para editar:", err);
    res.status(500).send('Error al obtener el producto');
  }
};

// Editar un producto
exports.editProduct = async (req, res) => {
  try {
    const { name, description, category, autor, precio } = req.body;
    const image = req.file ? req.file.filename : '';

    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    await product.update({
      name,
      description,
      category,
      autor,
      precio: Number(precio),
      image: image || product.image, // Mantener la imagen anterior si no se sube una nueva
    });

    res.redirect('/products');
  } catch (err) {
    console.error("Error al actualizar el producto:", err);
    res.status(500).send('Error al actualizar el producto');
  }
};

// Mostrar los detalles de un producto
exports.showProductDetail = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('products/productDetail', { product });
  } catch (err) {
    console.error("Error al obtener el producto:", err);
    res.status(500).send('Error al obtener el producto');
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    await product.destroy();
    res.redirect('/products');
  } catch (err) {
    console.error("Error al eliminar el producto:", err);
    res.status(500).send('Error al eliminar el producto');
  }
};
