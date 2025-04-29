// routes/userRoutes.js
const express = require('express');
const { getAllUsers, getUserById } = require('../../controllers/userApiController');
const router = express.Router();

// Rutas para usuarios
router.get('/', getAllUsers);
router.get('/:id', getUserById);

module.exports = router;
