const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

// const products = require('./products.json');


const indexRouter = require('./routes/index');
const nosotrosRouter = require('./routes/nosotros');
const librosRouter = require('./routes/librosRoutes');
const contactenosRouter = require('./routes/contactenosRoutes')



// app.use(express.json());

app.set('view engine', 'ejs');  //Esto es un motor de plantillas
app.use(express.static(path.join(__dirname, 'public'))); //Ubicacion de las vistas


app.use('/', indexRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/libros', librosRouter);
app.use('/contactenos', contactenosRouter);




module.exports = app;
