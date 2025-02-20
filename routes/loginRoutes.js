// routes/loginRoute.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Ruta para procesar el formulario de login
router.post('/login', loginController.login);

module.exports = router;
