const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/products.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return res.status(500).send('Error al leer el archivo de productos');
        }

        try {
            const libros = JSON.parse(data);
            console.log('Libros cargados:', libros);
            res.render('libros', { libros });
        } catch (parseError) {
            console.error('Error al parsear JSON:', parseError);
            res.status(500).send('Error al procesar datos');
        }
    });
});
app.get('/libros/:id', (req, res) => {
    const libroId = req.params.id;
    const libro = libros.find(l => l.id == libroId); 

    if (!libro) {
        return res.status(404).send('Libro no encontrado');
    }

    console.log('Mostrando detalles del libro:', libro); // Para depuración

    res.render('productDetail', { product: libro });
});



module.exports = librosController;
