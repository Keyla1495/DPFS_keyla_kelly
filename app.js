const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar CORS

// Configurar CORS para permitir peticiones desde Vite (localhost:5173)
app.use(cors({
  origin: "http://localhost:5173", // Permitir el frontend en Vite
  methods: "GET,POST,PUT,DELETE",
  credentials: true // Si usas cookies o sesiones
}));



// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// // Importar los modelos para sincronización
const { sequelize } = require('./models'); // Asegúrate de tener este archivo

app.use(methodOverride('_method')); // Para manejar PUT y DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de middleware
// app.use(bodyParser.urlencoded({ extended: true }));
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
const usersRouter = require('./routes/usersRoutes');
const productApiRouter = require('./routes/api/products');
const usersApiRouter = require('./routes/api/users');


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
app.use('/users', usersRouter);
app.use('/api/products', productApiRouter);
app.use("/api/users", usersApiRouter); 




// Sincronizar la base de datos
sequelize.sync({ force: false })  // Si usas { force: true }, eliminará las tablas y las recreará
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error al sincronizar la base de datos:', err));


// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: "Página no encontrada" }); 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
