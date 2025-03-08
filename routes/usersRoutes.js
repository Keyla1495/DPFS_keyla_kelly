const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerConfig'); // Importar Multer
const usersController = require('../controllers/usersController');

// Rutas de usuarios
router.get('/register', usersController.showRegisterForm);
router.post('/register', upload.single('profileImage'), usersController.registerUser);

router.get('/login', usersController.showLoginForm);
router.post('/login', usersController.loginUser);

router.get('/profile', usersController.showProfile);
router.get('/logout', usersController.logoutUser);

module.exports = router;
