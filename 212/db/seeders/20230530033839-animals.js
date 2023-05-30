/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animalsData = [
      {
        name: 'Сосисочник',
        image: 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg',
        user_id: 1,
        // type_id: 1,
      },
      {
        name: 'Котлета',
        image: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg',
        user_id: 2,
        // type_id: 2,
      },
      {
        name: 'Бульдозер',
        image: 'https://cdn.pixabay.com/photo/2019/08/19/07/45/pet-4415649_960_720.jpg',
        user_id: 3,
        // type_id: 3,
      },
      {
        name: 'Мармеладка',
        image: 'https://cdn.pixabay.com/photo/2016/01/02/16/53/giraffe-1117648_960_720.jpg',
        user_id: 4,
        // type_id: 4,
      },
      {
        name: 'Принц Гав-Гав',
        image: 'https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-505667_960_720.jpg',
        user_id: 5,
        // type_id: 5,
      },
      {
        name: 'Чудосвин',
        image: 'https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg',
        user_id: 1,
        // type_id: 5,
      },
      {
        name: 'Капустник',
        image: 'https://cdn.pixabay.com/photo/2017/04/05/01/53/mona-2202972_960_720.jpg',
        user_id: 2,
        // type_id: 4,
      },
      {
        name: 'Бублик',
        image: 'https://cdn.pixabay.com/photo/2014/12/22/10/04/lion-577104_960_720.jpg',
        user_id: 3,
        // type_id: 2,
      },
      {
        name: 'Мисс Кусачка',
        image: 'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951_960_720.jpg',
        user_id: 4,
        // type_id: 3,
      },
      {
        name: 'Шерстяной Хаос',
        image: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/lion-163311_960_720.jpg',
        user_id: 5,
        // type_id: 1,
      },
    ];
    const animals = animalsData.map((animal) => ({
      ...animal,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Animals', animals);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals');
  },
};
