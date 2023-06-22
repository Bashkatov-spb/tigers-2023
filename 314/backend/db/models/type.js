const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: 'type_id' });
    }
  }
  Type.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Type',
    }
  );
  return Type;
};
