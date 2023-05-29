const { Post } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Post.create({
      title: 'Я всё сделяль',
      likes: 10,
    });
  },

  async down() {
    await Post.destroy({
      truncate: {
        cascade: true,
        restartIdentity: true,
      },
    });
  },
};
