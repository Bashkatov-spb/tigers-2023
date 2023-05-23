'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  }
  Post.init(
    {
      student_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Students',
          key: 'id',
        },
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
