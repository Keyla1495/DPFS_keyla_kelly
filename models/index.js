const { Sequelize, DataTypes } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('tienda', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Probar conexión
sequelize.authenticate()
    .then(() => console.log('✅ Conexión establecida con la base de datos.'))
    .catch(error => console.error('❌ Error al conectar a la base de datos:', error));

// Modelos
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.User = require('./users')(sequelize, DataTypes);
db.Category = require('./category')(sequelize, DataTypes);
db.Product = require('./product')(sequelize, DataTypes);

// Relaciones (si tienes)
db.Category.hasMany(db.Product, { foreignKey: 'category_id' });
db.Product.belongsTo(db.Category, { foreignKey: 'category_id' });

module.exports = db;
