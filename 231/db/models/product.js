const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Comment, Favourite, Order }) {
      this.hasMany(Comment, { foreignKey: 'product_id' });
      this.hasMany(Favourite, { foreignKey: 'product_id' });
      this.hasMany(Order, { foreignKey: 'product_id' });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      cost: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
