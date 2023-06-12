const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Product, User }) {
      this.belongsTo(Product, { foreignKey: 'product_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Comment.init(
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
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
