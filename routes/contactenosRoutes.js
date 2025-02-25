const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactenosController');

// Ruta para mostrar el formulario de contacto
router.get('/', contactController.showForm);

// Ruta para procesar el formulario de contacto
router.post('/', contactController.processForm);

module.exports = router;
