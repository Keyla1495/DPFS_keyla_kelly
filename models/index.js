const { Sequelize } = require('sequelize');
const sequelize = require('../database/config'); // Asegúrate de que la ruta a la base de datos sea correcta

// Importación de los modelos
const Category = require('./Category');
const Autor = require('./Autor');
const User = require('./user');
const Product = require('./product');
const Order = require('./Order');


// Establecer relaciones entre los modelos

// Relación entre Product y Category (Un producto pertenece a una categoría)
Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

// Relación entre Product y Autor (Un producto tiene un autor)
Product.belongsTo(Autor, { foreignKey: 'autorId' });
Autor.hasMany(Product, { foreignKey: 'autorId' });

// Relación entre Order y User (Una orden pertenece a un usuario)
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

// Relación entre Order y Product (Una orden puede tener varios productos)
Order.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: 'OrderProducts', foreignKey: 'productId' });


// Sincroniza los modelos con la base de datos
(async () => {
  try {
    await sequelize.sync({ force: false }); // Usa `force: true` para eliminar tablas existentes (solo en desarrollo)
    console.log('Tablas sincronizadas con éxito');
  } catch (error) {
    console.error('Error al sincronizar las tablas:', error);
  }
})();

module.exports = { sequelize, Category, Autor, User, Product, Order };
