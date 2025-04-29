const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
  try {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error al leer productos:", err);
    return [];
  }
};

const writeProducts = (data) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(data, null, 2));
};

const productController = {
  // Listar productos
  index: (req, res) => {
    const products = readProducts();
    res.render('products/libros', { products, title: "Libros" });
  },

  // Ver detalle de producto
  detail: (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('products/productDetail', { title: 'Detalle del Producto', product });
  },

  // Formulario de creación
  createForm: (req, res) => {
    res.render('products/createProduct', { title: 'Crear Producto' });
  },

  // Guardar nuevo producto
  create: (req, res) => {
    const products = readProducts();
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: req.body.name,
      description: req.body.description,
      precio: parseFloat(req.body.precio),
      category: req.body.category,
      autor: req.body.autor || 'Desconocido',
      image: req.file ? req.file.filename : 'default.jpg'
    };

    products.push(newProduct);
    writeProducts(products);

    res.redirect('/libros');
  },

  // Formulario de edición
  editForm: (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    res.render('products/editProduct', { title: 'Editar Producto', product });
  },

  // Actualizar producto
  update: (req, res) => {
    const products = readProducts();
    const id = parseInt(req.params.id);

    const updatedProducts = products.map(p => {
      if (p.id === id) {
        return {
          ...p,
          name: req.body.name,
          description: req.body.description,
          precio: parseFloat(req.body.precio),
          category: req.body.category,
          autor: req.body.autor || p.autor,
          image: req.file ? req.file.filename : p.image
        };
      }
      return p;
    });

    writeProducts(updatedProducts);
    res.redirect('/libros');
  },

  // Eliminar producto
  deleteProduct: (req, res) => {
    const id = parseInt(req.params.id); // Aseguramos que sea número
    const products = readProducts();
    const updatedProducts = products.filter(product => product.id !== id);

    if (products.length === updatedProducts.length) {
      return res.status(404).send('Producto no encontrado');
    }

    writeProducts(updatedProducts);
    res.redirect('/products/admin'); // O donde quieras redirigir
  }
};

module.exports = productController;
