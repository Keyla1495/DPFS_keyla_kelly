const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
  tableName: 'categories',  // Nombre de la tabla en la base de datos
});

module.exports = Category;
