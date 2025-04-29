module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL(10,2),
        image: DataTypes.STRING,
        category_id: DataTypes.INTEGER
    }, {
        tableName: 'products',
        timestamps: true
    });
    product.associate = function(models) {
        product.belongsTo(models.Category, { foreignKey: 'category_id' });
    };
    return product;
};
