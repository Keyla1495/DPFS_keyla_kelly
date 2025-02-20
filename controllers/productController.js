const products = [
    {
        id: 1, 
        name: "A través de mi ventana", 
        price: 15.99, 
        description: "Novela Juvenil", 
        image: "/images/Libro A traves de mi ventana.jpeg" 
    },
    { 
        id: 2, 
        name: "After", 
        price: 12.99, 
        description: "Novela Juvenil", 
        image: "/images/Libro After.jpg" 
    },
    {
        id: 3, 
        name: "Atlantis", 
        price: 10.99, 
        description: "Novela Juvenil", 
        image: "/images/Libro Atlantis.jpg" 
    },
    { 
        id: 4, 
        name: "El final del Viaje", 
        price: 12.99, 
        description: "Novela Juvenil", 
        image: "/images/Libro El final del Viaje.jpg" 
    },
    { 
        id: 5, 
        name: "Almas Perdidas I", 
        price: 15.99, 
        description: "Novela Juvenil", 
        image: "/images/Libro Almas Perdidas I.png" 
    }
]; 

const productController = {
    index: (req, res) => {
        res.render('products/productDetail', { product });
    },

    detalle: (req, res) => {
        const productId = parseInt(req.params.id);
        const product = products.find(prod => prod.id === productId);

        if (!product) {
            return res.status(404).send("Producto no encontrado");
        }

        res.render('products/productDetail', { product });
    }
};

module.exports = productController;
