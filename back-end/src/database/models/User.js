module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
   {
    id: { primaryKey: true, 
      autoIncrement: true,
     type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
{ underscored: true, timestamps: false, tableName: 'users' },
);
  Users.associate = (models) => {
    Users.hasMany(models.Sales, { forreignKey: 'userId', as: 'selUser' });
    Users.hasMany(models.Sales, { foreignKey: 'sellerId', as: 'saleSeller' });
  };

  return Users;
};