/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animalsData = [
      {
        name: 'Сосисочник',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpxKBtm7fo_KOh0zz8BevRD3HhwdUKg-2IeDjGNlJrQ13oo9PZcUtWM_8BU999jCSYek&usqp=CAU',
        user_id: 1,
        type_id: 1,
      },
      {
        name: 'Котлета',
        image:
          'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-d8c5690a-d7dc-4c85-b231-5ee6cc6f309e',
        user_id: 2,
        type_id: 2,
      },
      {
        name: 'Бульдозер',
        image: 'https://cdn.pixabay.com/photo/2019/08/19/07/45/pet-4415649_960_720.jpg',
        user_id: 3,
        type_id: 3,
      },
      {
        name: 'Мармеладка',
        image:
          'https://avatars.dzeninfra.ru/get-zen_doc/142473/pub_6125fb367bd64515ea9afc40_6125fbbff5d05136396a5bcd/scale_1200',
        user_id: 4,
        type_id: 4,
      },
      {
        name: 'Принц Гав-Гав',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbOFrvF1VaCpIOxYlve35nP_Q7EvhXhH3TA&usqp=CAU',
        user_id: 5,
        type_id: 5,
      },
      {
        name: 'Чудосвин',
        image:
          'https://animals.pibig.info/uploads/posts/2023-03/1680268016_animals-pibig-info-p-samoe-smeshnoe-zhivotnoe-zhivotnie-instagr-1.jpg',
        user_id: 1,
        type_id: 5,
      },
      {
        name: 'Капустник',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXd0_K-eU1lW8CIuii7lyLBpS7oIVMdguhPw&usqp=CAU',
        user_id: 2,
        type_id: 4,
      },
      {
        name: 'Бублик',
        image:
          'https://cdn.iz.ru/sites/default/files/styles/900x600/public/photo_item-2022-10/1666271042.jpg?itok=e04DvWrq',
        user_id: 3,
        type_id: 2,
      },
      {
        name: 'Мисс Кусачка',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomh9k573jN04E_XqFDeEWXzY3Vlz3Cbw0YQ&usqp=CAU',
        user_id: 4,
        type_id: 3,
      },
      {
        name: 'Шерстяной Хаос',
        image:
          'https://cdnn11.img.sputnik.by/img/07e6/0a/1b/1068422950_0:0:1200:1200_1920x0_80_0_0_a51e00ed4439c72f67f64101ad1f61b6.jpg',
        user_id: 5,
        type_id: 1,
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
