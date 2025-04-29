module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        name: DataTypes.STRING
    }, {
        tableName: 'categories',
        timestamps: true
    });
    category.associate = function(models) {
        category.hasMany(models.Product, { foreignKey: 'category_id' });
    };
    return category;
};
