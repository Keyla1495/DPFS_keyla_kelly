const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});


// Importar los modelos para sincronización
const { sequelize } = require('./models'); // Asegúrate de tener este archivo

app.use(methodOverride('_method')); // Para manejar PUT y DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); 


// Importar rutas
const indexRouter = require('./routes/index');
const nosotrosRouter = require('./routes/nosotros');
const librosRouter = require('./routes/librosRoutes');
const contactenosRouter = require('./routes/contactenosRoutes');
const productRouter = require('./routes/productRoutes'); 
const usersRoutes = require('./routes/usersRoutes');

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// Configurar Express para servir archivos estáticos de la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Usar rutas
app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/libros', librosRouter);
app.use('/contactenos', contactenosRouter);
app.use('/products', productRouter);
app.use("/users", usersRoutes);

// Rutas de la API
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Sincronizar la base de datos
sequelize.sync({ force: false })  // Si usas { force: true }, eliminará las tablas y las recreará
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error al sincronizar la base de datos:', err));


// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: "Página no encontrada" }); 
});



module.exports = app;
