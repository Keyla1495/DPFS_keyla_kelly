const express = require('express');
const router = express.Router();
const { Product, ProductCategory } = require('../../models');

// Obtener lista de productos paginada
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const { count, rows: products } = await Product.findAndCountAll({
      include: [{ model: ProductCategory, as: 'ProductCategory', attributes: ['name'] }],
      attributes: ['id', 'name', 'description'],
      limit,
      offset
    });

    const totalPages = Math.ceil(count / limit);

    // Contar productos por categoría
    const categoriesCount = await ProductCategory.findAll({
      attributes: ['name'],
      include: [{
        model: Product,
        as: 'Products',
        attributes: ['id']
      }]
    });

    const countByCategory = {};
    categoriesCount.forEach(cat => {
      countByCategory[cat.name] = cat.Products.length;
    });

    res.json({
      count,
      countByCategory,
      products: products.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.ProductCategory ? product.ProductCategory.name : null,
        detail: `/api/products/${product.id}`
      })),
      next: page < totalPages ? `/api/products?page=${page + 1}` : null,
      previous: page > 1 ? `/api/products?page=${page - 1}` : null
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Obtener detalle de un producto
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: ProductCategory, as: 'ProductCategory', attributes: ['name'] }],
      attributes: ['id', 'name', 'description', 'price', 'image']
    });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.ProductCategory ? product.ProductCategory.name : null,
      image: `/uploads/${product.image}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

module.exports = router;
