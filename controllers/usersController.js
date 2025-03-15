const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
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
  const { name, email, password } = req.body;

  // Verificar si los campos están vacíos
  if (!name || !email || !password) {
    return res.redirect('/users/register');
  }

  // Encriptar la contraseña
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error al encriptar la contraseña:", err);
      return res.redirect('/users/register');
    }

    // Crear el nuevo usuario
    const newUser = {
      name,
      email,
      password: hashedPassword,
      profileImage: req.file ? req.file.filename : 'default.jpg', // Imagen de perfil, si la hay
    };

    // Leer los usuarios actuales
    const users = readUsers();
    // Verificar si el correo ya está registrado
    if (users.some(user => user.email === email)) {
      return res.redirect('/users/register'); // Si ya existe un usuario con ese email, redirige
    }

    // Agregar el nuevo usuario al archivo
    users.push(newUser);

    // Guardar el usuario en el archivo
    saveUsers(users);

    // Redirigir al login
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
    return res.redirect('/users/login'); // Si faltan campos, redirige al login
  }
  next(); // Si los campos están completos, pasa al siguiente middleware
};

// Iniciar sesión
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.redirect('/users/login'); // Si no se encuentra el usuario, redirige al login
  }

  // Verificar la contraseña
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.redirect('/users/login'); // Si hay error o la contraseña no coincide, redirige al login
    }

    // Crear una sesión para el usuario
    req.session.user = user;
    res.redirect('/users/profile'); // Redirige al perfil
  });
};

// Mostrar el perfil del usuario
exports.showProfile = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login'); // Si no hay sesión activa, redirige al login
  }

  res.render('users/profile', { user: req.session.user }); // Muestra el perfil del usuario
};

// Middleware para verificar si el usuario está autenticado
exports.isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/users/login'); // Si no hay sesión, redirige al login
  }
  next(); // Si hay sesión, continúa con la siguiente función
};



// Función para cerrar sesión
exports.logoutUser = (req, res) => {
  // Eliminar la sesión del usuario
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
      return res.redirect('/users/profile'); // Si ocurre un error, redirigir al perfil
    }
    res.clearCookie('connect.sid'); // Limpiar la cookie de sesión
    res.redirect('/users/login'); // Redirigir al login después de cerrar sesión
  });
};
