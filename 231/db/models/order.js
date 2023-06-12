const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Product, Cart }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(Cart, { foreignKey: 'cart_id' });
    }
  }
  Order.init(
    {
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      cart_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Carts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
