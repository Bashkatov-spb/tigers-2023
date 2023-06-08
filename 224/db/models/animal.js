const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ User, Type, Like }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Type, { foreignKey: 'type_id' });
      this.hasMany(Like, { foreignKey: 'animal_id' });
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
        onDelete: 'CASCADE',
      },
      type_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  );
  return Animal;
};
