'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {}
  }
  Student.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      education: {
        defaultValue: false,
        type: DataTypes.TEXT,
      },
      money: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
