const { Sequelize } = require('sequelize');

// Configura con tus datos correctos
const sequelize = new Sequelize('tienda', 'root', 'tu_contraseña', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Esto es opcional, para desactivar los logs de las consultas SQL
});

async function connect() {
    try {
        // Intenta autenticar la conexión a la base de datos
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

module.exports = { sequelize, connect };
