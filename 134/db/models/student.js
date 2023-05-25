const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ Post, Comment }) {
      // this.hasMany(Post, { foreignKey: 'student_id' });
      this.belongsToMany(Post, { through: Comment, foreignKey: 'student_id', otherKey: 'post_id' });
      this.hasMany(Comment, { foreignKey: 'student_id' });
    }
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
      university: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
