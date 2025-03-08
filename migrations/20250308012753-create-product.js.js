'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear la tabla 'Products'
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true, // Se incrementará automáticamente
        primaryKey: true, // Esta columna es la clave primaria
        type: Sequelize.INTEGER // Tipo de dato entero para el ID
      },
      name: {
        type: Sequelize.STRING, // Tipo de dato cadena de texto
        allowNull: false, // No puede ser nulo
      },
      description: {
        type: Sequelize.STRING, // Tipo de dato cadena de texto
        allowNull: true, // Puede ser nulo
      },
      category: {
        type: Sequelize.STRING, // Tipo de dato cadena de texto
        allowNull: true, // Puede ser nulo
      },
      autor: {
        type: Sequelize.STRING, // Tipo de dato cadena de texto
        allowNull: true, // Puede ser nulo
      },
      precio: {
        type: Sequelize.DECIMAL, // Tipo de dato decimal para el precio
        allowNull: false, // No puede ser nulo
      },
      image: {
        type: Sequelize.STRING, // Tipo de dato cadena de texto para la imagen
        allowNull: true, // Puede ser nulo
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, // Fecha de creación
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, // Fecha de última actualización
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Si la migración se revierte, se eliminará la tabla 'Products'
    await queryInterface.dropTable('Products');
  }
};
