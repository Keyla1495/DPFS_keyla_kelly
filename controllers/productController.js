const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

// Función para leer productos
const readProducts = () => {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(data);
};

// Función para escribir productos
const writeProducts = async (products) => {
  try {
    await fs.promises.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
  } catch (err) {
    throw new Error('Error al escribir los productos');
  }
};

// Mostrar todos los productos
exports.listProducts = (req, res) => {
  const libros = readProducts();
  res.render('products/libros', { libros });
};

// Mostrar el formulario de creación
exports.showCreateForm = (req, res) => {
  res.render('products/createProduct');
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  const { name, description, category, autor, precio } = req.body;
  const image = req.file ? req.file.path : '';

  const newProduct = { 
    id: Date.now(), // ID único
    name, 
    description,
    image, 
    category, 
    autor, 
    precio 
     
  };

  try {
    const products = readProducts();
    products.push(newProduct);
    await writeProducts(products);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear el producto');
  }
};

// Mostrar el formulario de edición
exports.showEditForm = (req, res) => {
  const productId = Number(req.params.id); // Convertimos el ID a número
  const products = readProducts();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).send('Producto no encontrado');
  }

  res.render('products/editProduct', { product });
};

// Editar un producto
exports.editProduct = async (req, res) => {
  const productId = Number(req.params.id);
  const { name, description, category, autor, precio } = req.body;
  const image = req.file ? req.file.path : '';

  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).send('Producto no encontrado');
  }

  // Mantener la imagen anterior si no se sube una nueva
  const oldImage = products[productIndex].image;
  products[productIndex] = { 
    id:  products[productIndex].id, 
    name, 
    description, 
    image: image || oldImage,
    category, 
    autor, 
    precio
    
  };

  try {
    await writeProducts(products);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar el producto');
  }
};

// Mostrar los detalles de un producto
exports.showProductDetail = (req, res) => {
  const productId = Number(req.params.id);
  const products = readProducts();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).send('Producto no encontrado');
  }

  res.render('products/productDetail', { product });
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  const productId = Number(req.params.id);
  let products = readProducts();
  products = products.filter(p => p.id !== productId);
  
  try {
    await writeProducts(products);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar el producto');
  }
};
