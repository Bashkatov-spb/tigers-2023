const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const userData = [];

    for (let i = 0; i < 5; i += 1) {
      const seed = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      userData.push(seed);
    }

    await queryInterface.bulkInsert('Users', userData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
