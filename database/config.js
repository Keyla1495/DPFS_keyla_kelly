const { Sequelize } = require('sequelize');

// Configuración de la base de datos (ajusta los datos según tu configuración)
const sequelize = new Sequelize('fantasyworld_db', 'Libreria_FW', 'root', {
  host: 'localhost',
  dialect: 'mysql', 
  logging: false, // Para desactivar los logs de SQL en la consola
});

module.exports = sequelize; 