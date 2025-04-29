const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Función para leer productos desde el archivo
const readProducts = () => {
  const productsFilePath = path.join(__dirname, '../data/products.json');
  const fileData = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(fileData);
};

// Listar todos los productos con paginado
const getAllProducts = (req, res) => {
  try {
    const productsData = readProducts();

    const limit = 20;
    const page = parseInt(req.query.page) || 0;
    const offset = page * limit;

    const totalProducts = productsData.length;
    const paginatedProducts = productsData.slice(offset, offset + limit);

    const products = paginatedProducts.map(product => ({
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category, // Asumiendo que es un array
      detalle: `${BASE_URL}/api/products/${product.id}`, // Usamos BASE_URL
    }));

    res.json({
      count: totalProducts,
      products,
      next: offset + limit < totalProducts ? `${BASE_URL}/api/products?page=${page + 1}` : null,
      previous: page > 0 ? `${BASE_URL}/api/products?page=${page - 1}` : null,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Obtener detalle de un producto por ID
const getProductById = (req, res) => {
  try {
    const productsData = readProducts();

    const productId = parseInt(req.params.id);
    const product = productsData.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({
      id: product.id,
      name: product.name,
      description: product.description,
      category: product.category,
      imagen: `${BASE_URL}/images/${product.imagen}`, // Usamos BASE_URL para la imagen
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

module.exports = { getAllProducts, getProductById };
