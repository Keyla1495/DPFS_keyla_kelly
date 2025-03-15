const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImage: {
    type: DataTypes.STRING,
    defaultValue: 'default.jpg',
  },
}, {
  timestamps: true,
  tableName: 'users',  // Nombre de la tabla en la base de datos
});

module.exports = User;
