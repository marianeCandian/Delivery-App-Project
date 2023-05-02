module.exports = (sequelize, DataTypes) => {
    const SalesProducts = sequelize.define('SalesProducts', {
        saleId: { type: DataTypes.INTEGER, primaryKey: true },
        productId: { type: DataTypes.INTEGER, primaryKey: true },
        quantity: DataTypes.INTEGER,
    }, { timestamps: false, tableName: 'sales_products', underscored: true });
    SalesProducts.associate = (models) => {
        models.Sales.belongsToMany(models.Products, {
            foreignKey: 'saleId', 
            otherKey: 'productId',
            through: SalesProducts,
            as: 'sales',
          });
          models.Products.belongsToMany(
            models.Sales,
            { foreignKey: 'productId', otherKey: 'saleId', through: SalesProducts, as: 'products' },
            );
    };
    return SalesProducts;
};