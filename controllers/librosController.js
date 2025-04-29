// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname, '../data/products.json');

// const readProducts = () => {
//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         return JSON.parse(data);
//     } catch (err) {
//         console.error('Error al leer o parsear el archivo:', err);
//         return [];
//     }
// };

// const librosController = {
//     index: (req, res) => {
//         const libros = readProducts();
//         res.render('products/libros', { products: libros, title: "Libros" });
//     },

//     detail: (req, res) => {
//         const libros = readProducts();
//         const libroId = req.params.id;
//         const libro = libros.find(l => l.id == libroId);

//         if (!libro) {
//             return res.status(404).send('Libro no encontrado');
//         }

//         res.render('products/productDetail', { product: libro, title: "Detalle del Producto" });
//     },

//     createForm: (req, res) => {
//         res.render('products/createProduct', { title: 'Crear Producto' });
//     },

//     create: (req, res) => {
//         const libros = readProducts();
//         const newLibro = {
//             id: libros.length > 0 ? libros[libros.length - 1].id + 1 : 1,
//             name: req.body.name,
//             description: req.body.description,
//             precio: parseFloat(req.body.precio),
//             categoria: req.body.category,
//             autor: req.body.autor || 'Desconocido',
//             image: req.file ? req.file.filename : 'default.jpg'
//         };

//         libros.push(newLibro);
//         fs.writeFileSync(filePath, JSON.striny(libros, null, 2));

//         res.redirect('/libros');
//     }
// };

// module.exports = librosController;
