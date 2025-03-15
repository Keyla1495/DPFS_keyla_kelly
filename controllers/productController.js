const { Product } = require('../models');
const { Category } = require('../models'); 

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
  res.render('products/createProduct', {title: 'Creación de Producto'});
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, category, autor, precio } = req.body;
    const image = req.file ? req.file.filename : null;

    console.log("Categoría recibida:", category);

    if (!name || !description || !category || !precio) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    // Buscar la categoría por su nombre
    const categoryRecord = await Category.findOne({ where: { nombre: category } });

    if (!categoryRecord) {
      console.error("Error: No se encontró la categoría con el nombre:", category);
      return res.status(400).send(`Categoría "${category}" no encontrada`);
    }

    // Crear el producto en la base de datos
    await Product.create({
      nombre: name,
      descripcion: description,
      productCateg_id: categoryRecord.id, // Ajustar según el nombre real del ID en la BD
      AutorID: autor,
      precio: parseFloat(precio),
      imagen: image,
    });

    res.redirect('/libros');
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

    res.render('products/editProduct', { product, title: 'Edición de Productos' });
  } catch (err) {
    console.error("Error al obtener el producto para editar:", err);
    res.status(500).send('Error al obtener el producto');
  }
};

// Editar un producto
exports.editProduct = async (req, res) => {
  try {
    const { name, description, category, autor, precio } = req.body;
    const image = req.file ? req.file.filename : null;

    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    // Validar y obtener el ID de la categoría
    const categoryRecord = await Category.findOne({ where: { Categoria: category } });
    if (!categoryRecord) {
      return res.status(400).send('Categoría no encontrada');
    }

    await product.update({
      nombre: name,
      descripcion: description,
      productCateg_id: categoryRecord.Categoria_id,
      AutorID: autor,
      precio: parseFloat(precio),
      imagen: image || product.imagen, // Mantener la imagen anterior si no se sube una nueva
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
    console.log('ID recibido:', req.params.id);
    const product = await Product.findByPk(req.params.id); // Buscar el producto por ID
    
    if (!product) {
      return res.status(404).send('Producto no encontrado'); 
    }

    res.render('products/productDetail', { title: 'Detalle del Producto', product }); // Enviar el producto a la vista
  } catch (err) {
    console.error("Error al obtener el producto:", err); 
    res.status(500).send('Error al obtener el producto'); // Enviar un mensaje de error 500 si ocurre un problema
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }

    // Verificar dependencias antes de eliminar el producto
    // Ejemplo: si el producto está relacionado con órdenes, no permitir su eliminación
    if (product.orders && product.orders.length > 0) {
      return res.status(400).send('Este producto tiene órdenes asociadas y no puede ser eliminado');
    }

    await product.destroy();
    res.redirect('/products');
  } catch (err) {
    console.error("Error al eliminar el producto:", err);
    res.status(500).send('Error al eliminar el producto');
  }
};
