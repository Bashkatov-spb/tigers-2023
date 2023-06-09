const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Animal }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Animal, { foreignKey: 'animal_id' });
    }
  }
  Like.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      animal_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Animals',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
