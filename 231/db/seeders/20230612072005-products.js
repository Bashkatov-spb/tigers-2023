/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const productsData = [
      {
        title: 'Брюхенгхвалле',
        cost: 100000,
        count: 10,
        img: 'https://www.ikea.com/ext/ingkadam/m/29847415f68f9f90/original/PH187090.jpg?f=s',
      },
      {
        title: 'Кронвергштерн',
        cost: 100000,
        count: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3nhVPU6_t4WdmiBZHH2tf2LvL4XI82fR3g&usqp=CAU',
      },
      {
        title: 'Столчакенгаген',
        cost: 100000,
        count: 1,
        img: 'https://www.ikea.com/gb/en/images/products/hol-side-table-acacia__0836247_pe601416_s5.jpg',
      },
      {
        title: 'Салфеткопупен',
        cost: 100000,
        count: 100000,
        img: 'https://www.ikea.com/images/a-white-room-with-neutral-textiles-rattan-baskets-and-a-bamb-86ea9da9e6678cc87a53059204bac688.jpg',
      },
      {
        title: 'Стуленваген',
        cost: 100000,
        count: 90,
        img: 'https://www.valsparpaint.co.uk/media/cacpcicl/1_listing-and-header-1.jpg?rnd=133117762083270000',
      },
    ];

    const products = productsData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products');
  },
};
