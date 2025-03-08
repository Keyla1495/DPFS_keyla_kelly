// const fs = require('fs');
// const path = require('path');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); // Importamos el modelo User de Sequelize

// Mostrar el formulario de registro
exports.showRegisterForm = (req, res) => {
  res.render('users/register');
};

// Registrar un usuario
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Verificamos si la contraseña está presente
  if (!password) {
    return res.render('users/register', { error: "La contraseña es obligatoria" });
  }

  // Verificamos si el email ya existe
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.render('users/register', { error: "El correo electrónico ya está registrado" });
  }

  // Procesamos la imagen (si existe)
  const image = req.file ? req.file.filename : 'default.png';

  // Encriptamos la contraseña
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Creamos el nuevo usuario en la base de datos
  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      image
    });

    // Redirigimos al formulario de login
    res.redirect('/users/login');
  } catch (error) {
    console.error(error);
    res.render('users/register', { error: "Error al crear el usuario, intenta nuevamente." });
  }
};

// Mostrar el formulario de login
exports.showLoginForm = (req, res) => {
  res.render('users/login', { error: null });
};

// Autenticar usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Buscamos al usuario en la base de datos
  const user = await User.findOne({ where: { email } });

  // Verificamos si el usuario existe y si la contraseña es correcta
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.render('users/login', { error: "Credenciales incorrectas" });
  }

  // Creamos una sesión para el usuario autenticado
  req.session.user = user;

  // Redirigimos al perfil del usuario
  res.redirect('/users/profile');
};

// Mostrar el perfil de usuario
exports.showProfile = (req, res) => {
  // Verificamos si el usuario está autenticado
  if (!req.session.user) {
    return res.redirect('/users/login');
  }

  // Mostramos el perfil con los datos del usuario desde la base de datos
  res.render('users/profile', { user: req.session.user });
};

// Logout de usuario
exports.logoutUser = (req, res) => {
  // Destruimos la sesión del usuario
  req.session.destroy();
  res.redirect('/');
};
