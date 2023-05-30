const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      // this.belongsTo(Type, { foreignKey: 'type_id' });
    }
  }
  Animal.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      // type_id: {
      //   allowNull: false,
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Types',
      //     key: 'id',
      //   },
      // },
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  );
  return Animal;
};
