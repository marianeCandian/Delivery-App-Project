module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
'Users', 
{
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
{ underscored: true, timestamps: false, tableName: 'users' },
);
  Users.associate = (models) => {
    Users.hasMany(models.Sales, { foreignKey: 'user_id', as: 'userId' });
    Users.hasMany(models.Sales, { foreignKey: 'seller_id', as: 'sellerId' });
  };
  return Users;
};