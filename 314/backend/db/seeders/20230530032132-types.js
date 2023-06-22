/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const typesData = ['Кот', 'Собака', 'Пингвин', 'Минипиг', 'Попугай'];
    const types = [];
    for (let i = 0; i < typesData.length; i += 1) {
      const seed = {
        title: typesData[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      types.push(seed);
    }

    await queryInterface.bulkInsert('Types', types);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Types');
  },
};
