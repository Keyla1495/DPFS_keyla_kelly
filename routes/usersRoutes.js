const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig');
const usersController = require('../controllers/usersController');
const usersValidator = require('../middlewares/usersValidator');

// Rutas de registro
router.get('/register', usersController.showRegisterForm);
router.post('/register', upload.single('profileImage'), usersValidator, usersController.registerUser);

// Rutas de login
router.get('/login', usersController.showLoginForm);
router.post('/login', usersController.loginUser);

// Perfil de usuario
router.get('/profile', usersController.isAuthenticated, usersController.showProfile);


// Dashboard de administrador
router.get('/admin', usersController.isAuthenticated, usersController.isAdmin, (req, res) => {
    res.render('users/admin', { user: req.session.user });
  });

// Eliminar usuario
router.delete('/users/delete/:userId', usersController.deleteUser);


// Cerrar sesión
router.get('/logout', usersController.logoutUser);

module.exports = router;
