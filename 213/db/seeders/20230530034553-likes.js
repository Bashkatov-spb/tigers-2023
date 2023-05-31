/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const likesData = [
      { user_id: 1, animal_id: 1 },
      { user_id: 1, animal_id: 4 },
      { user_id: 2, animal_id: 3 },
      { user_id: 2, animal_id: 5 },
      { user_id: 3, animal_id: 2 },
      { user_id: 3, animal_id: 7 },
      { user_id: 4, animal_id: 6 },
      { user_id: 4, animal_id: 8 },
      { user_id: 5, animal_id: 9 },
      { user_id: 5, animal_id: 10 },
    ];
    const likes = likesData.map((like) => ({
      ...like,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Likes', likes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Likes');
  },
};
