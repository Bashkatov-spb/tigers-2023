const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AnimalType extends Model {
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: 'type_id' });
    }
  }
  AnimalType.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'AnimalType',
    }
  );
  return AnimalType;
};
