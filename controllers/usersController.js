const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Ruta del archivo JSON donde se almacenan los usuarios
const usersFilePath = path.join(__dirname, '../data/users.json');

// Función para leer usuarios
const readUsers = () => {
  if (!fs.existsSync(usersFilePath)) return [];
  const fileContent = fs.readFileSync(usersFilePath, 'utf-8');
  return fileContent ? JSON.parse(fileContent) : [];
};

// Función para escribir usuarios
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

// Mostrar el formulario de registro
exports.showRegisterForm = (req, res) => {
  res.render('users/register');
};

// Registrar un usuario
exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  
  if (!password) {
    return res.render('users/register', { error: "La contraseña es obligatoria" });
  }

  const image = req.file ? req.file.filename : 'default.png';
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = { id: Date.now(), name, email, password: hashedPassword, image };

  const users = readUsers();
  users.push(newUser);
  writeUsers(users);

  res.redirect('/users/login');
};

// Mostrar el formulario de login
exports.showLoginForm = (req, res) => {
  res.render('users/login', { error: null });
};

// Autenticar usuario
exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(user => user.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.render('users/login', { error: "Credenciales incorrectas" });
  }

  req.session.user = user;
  res.redirect('/users/profile');
};

// Mostrar el perfil de usuario
exports.showProfile = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }
  res.render('users/profile', { user: req.session.user });
};

// Logout de usuario
exports.logoutUser = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
