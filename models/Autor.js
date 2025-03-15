const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const autor = sequelize.define('autor', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = autor;
