const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ Student, Comment }) {
      // this.belongsTo(Student, { foreignKey: 'student_id' });
      this.belongsToMany(Student, {
        through: Comment,
        foreignKey: 'post_id',
        otherKey: 'student_id',
      });
      this.hasMany(Comment, { foreignKey: 'post_id' });
    }
  }
  Post.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      likes: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
