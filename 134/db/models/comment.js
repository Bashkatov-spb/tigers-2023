const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Student, Post }) {
      this.belongsTo(Student, { foreignKey: 'student_id' });
      this.belongsTo(Post, { foreignKey: 'post_id' });
    }
  }
  Comment.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      student_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Students',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
