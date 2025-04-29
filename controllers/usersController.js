const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');

// Función para leer los usuarios desde el archivo
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
  } catch (err) {
    console.error("Error al leer el archivo de usuarios:", err);
    return [];
  }
};

// Función para guardar los usuarios en el archivo
const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    console.log("Usuarios guardados correctamente:", users);
  } catch (err) {
    console.error("Error al guardar el archivo de usuarios:", err);
  }
};

// Mostrar el formulario de registro
exports.showRegisterForm = (req, res) => {
  res.render('users/register');
};

// Registrar un nuevo usuario
exports.registerUser = (req, res) => {
  const { name, email, password, category } = req.body;

  if (!name || !email || !password) {
    return res.redirect('/users/register');
  }

  const errors = validationResult(req);
  console.log(errors.array());

  if (!errors.isEmpty()) {
    return res.render('users/register', {
      errors: errors.mapped(),
      oldData: req.body,
    });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error al encriptar la contraseña:", err);
      return res.redirect('/users/register');
    }

    const users = readUsers();

    // Verificar si el correo ya está registrado
    if (users.some(user => user.email === email)) {
      return res.redirect('/users/register');
    }

    // Generar un nuevo ID único
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      email,
      password: hashedPassword,
      category: category || 'user',
      profileImage: req.file ? req.file.filename : 'default.jpg',
    };

    users.push(newUser);
    saveUsers(users);

    res.redirect('/users/login');
  });
};

// Mostrar el formulario de login
exports.showLoginForm = (req, res) => {
  res.render('users/login');
};

// Middleware para validar datos de login
exports.loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.redirect('/users/login');
  }
  next();
};

// Iniciar sesión
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.redirect('/users/login');
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.redirect('/users/login');
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      category: user.category,
      profileImage: user.profileImage
    };

    if (user.category === 'admin') {
      res.redirect('/users/admin');
    } else {
      res.redirect('/users/profile');
    }
  });
};

// Mostrar el perfil del usuario
exports.showProfile = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }

  res.render('users/profile', { user: req.session.user });
};

// Middleware para verificar si el usuario está autenticado
exports.isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }
  next();
};

// Middleware para verificar si es admin
exports.isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.category === 'admin') {
    return next();
  }
  return res.redirect('/');
};

// Función para eliminar un usuario
exports.deleteUser = (req, res) => {
  const { userId } = req.params;

  const users = readUsers();

  const updatedUsers = users.filter(user => user.id !== Number(userId));

  if (users.length === updatedUsers.length) {
    return res.status(404).send('Usuario no encontrado');
  }

  saveUsers(updatedUsers);

  res.redirect('/users/admin');
};

// Función para cerrar sesión
exports.logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
      return res.redirect('/users/profile');
    }
    res.clearCookie('connect.sid');
    res.redirect('/users/login');
  });
};
