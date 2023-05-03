module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true, filed: 'user_id' },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true, filed: 'seller_id' },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: { type: DataTypes.DATE },
      status: { type: DataTypes.STRING(50),
    },
    }, { timestamps: false, underscored: true, tableName: 'sales', modelName: 'Sale' });
    Sale.associate = (models) => {
        Sale.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
        Sale.belongsTo(models.Users, { as: 'seller', foreignKey: 'sellerId' });
        Sale.hasMany(models.SalesProducts, { as: 'sale', foreignKey: 'saleId' });
    };
    return Sale;
  };