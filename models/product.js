const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Autor = sequelize.define('Autor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'autors',  // Nombre de la tabla en la base de datos
});

module.exports = Autor;
