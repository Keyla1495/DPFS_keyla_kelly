const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

// Función para leer productos desde JSON
const leerProductos = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Función para guardar productos en JSON
const guardarProductos = (productos) => {
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
};

const productController = {
    listar: (req, res) => {
        const productos = leerProductos();
        res.render('products/libros', { libros: productos });
    },

    detalle: (req, res) => {
        const productos = leerProductos();
        const producto = productos.find(prod => prod.id === parseInt(req.params.id));

        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }

        res.render('products/productDetail', { product: producto });
    },

    formularioCrear: (req, res) => {
        res.render('products/createProduct');
    },

    crear: (req, res) => {
        const productos = leerProductos();
        const nuevoProducto = {
            id: productos.length ? productos[productos.length - 1].id + 1 : 1,
            name: req.body.name,
            price: parseFloat(req.body.price),
            description: req.body.description,
            image: req.body.image
        };

        productos.push(nuevoProducto);
        guardarProductos(productos);

        res.redirect('/products');
    },

    formularioEditar: (req, res) => {
        const productos = leerProductos();
        const producto = productos.find(prod => prod.id === parseInt(req.params.id));

        if (!producto) {
            return res.status(404).send("Producto no encontrado");
        }

        res.render('products/editProduct', { product: producto });
    },

    actualizar: (req, res) => {
        let productos = leerProductos();
        productos = productos.map(prod => {
            if (prod.id === parseInt(req.params.id)) {
                return {
                    ...prod,
                    name: req.body.name,
                    price: parseFloat(req.body.price),
                    description: req.body.description,
                    image: req.body.image
                };
            }
            return prod;
        });

        guardarProductos(productos);
        res.redirect('/products');
    },

    eliminar: (req, res) => {
        let productos = leerProductos();
        productos = productos.filter(prod => prod.id !== parseInt(req.params.id));

        guardarProductos(productos);
        res.redirect('/products');
    }
};

module.exports = productController;
