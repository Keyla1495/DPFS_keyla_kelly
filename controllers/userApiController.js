const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';



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

// Controlador para obtener todos los usuarios paginados
const getAllUsers = (req, res) => {
  try {
    const limit = 10;
    const page = parseInt(req.query.page) || 0;
    const offset = page * limit;

    const users = readUsers();

    const paginatedUsers = users.slice(offset, offset + limit);

    const usersData = paginatedUsers.map(user => ({
      id: user.id,
      name: user.nombre,
      email: user.email,
      detail: `${BASE_URL}/api/users/${user.id}`, // 👈 usando BASE_URL
    }));
    
    res.json({
      count: users.length,
      users: usersData,
      next: offset + limit < users.length ? `${BASE_URL}/api/users?page=${page + 1}` : null, // 👈 aquí también
      previous: page > 0 ? `${BASE_URL}/api/users?page=${page - 1}` : null, // 👈 aquí también
    });
    
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

// Controlador para obtener un usuario por su ID
const getUserById = (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({
      id: user.id,
      name: user.nombre,
      email: user.email,
      profileImage: `${BASE_URL}/images/${user.profileImage}`, 
    });
    
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

module.exports = { getAllUsers, getUserById };
