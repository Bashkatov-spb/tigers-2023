const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Favourite, Cart }) {
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Favourite, { foreignKey: 'user_id' });
      this.hasMany(Cart, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
