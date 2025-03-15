const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');
const Product = require('./product');

const Order = sequelize.define('Order', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pendiente',  // Estado inicial de la orden
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  shippingAddress: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  tableName: 'orders',  // Nombre de la tabla en la base de datos
});

// Relación con User (Un usuario puede tener muchas órdenes)
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

// Relación con Product (Una orden puede tener muchos productos)
Order.belongsToMany(Product, { through: 'OrderProducts', foreignKey: 'orderId' });
Product.belongsToMany(Order, { through: 'OrderProducts', foreignKey: 'productId' });

module.exports = Order;
