'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
     
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // El nombre no puede ser nulo
      validate: {
        len: [1, 255], // El nombre debe tener entre 1 y 255 caracteres
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // El email no puede ser nulo
      unique: true, // El email debe ser único
      validate: {
        isEmail: true, // El campo debe tener un formato válido de email
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // La contraseña no puede ser nula
      validate: {
        len: [6, 255], // La contraseña debe tener al menos 6 caracteres
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, // La imagen es opcional
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
