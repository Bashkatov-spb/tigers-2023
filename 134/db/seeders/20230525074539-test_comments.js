const { Comment } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Comment.bulkCreate([
      {
        student_id: 1,
        post_id: 1,
        text: 'Всем привет, я сам себе оставил комментарий',
      },
    ]);
  },

  async down() {
    await Comment.destroy({ truncate: true, cascade: true });
  },
};
