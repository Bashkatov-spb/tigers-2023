const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Order }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'cart_id' });
    }
  }
  Cart.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
