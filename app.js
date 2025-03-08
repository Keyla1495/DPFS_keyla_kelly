const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(methodOverride('_method')); // Para manejar PUT y DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de sesión
app.use(session({
    secret: "mi_secreto_super_seguro",
    resave: false,
    saveUninitialized: false
}));

// Middleware para manejo de cookies
app.use(cookieParser());

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

// Usar rutas
app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/libros', librosRouter);
app.use('/contactenos', contactenosRouter);
app.use('/products', productRouter);
app.use("/users", usersRoutes);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).render('404', { message: "Página no encontrada" }); 
});

module.exports = app;
