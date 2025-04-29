module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        tableName: 'users',
        timestamps: true
    });
    return users;
};
