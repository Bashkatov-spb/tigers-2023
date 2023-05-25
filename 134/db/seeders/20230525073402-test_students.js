/** @type {import('sequelize-cli').Migration} */
const { Student, Post, Comment } = require('../models');

module.exports = {
  async up() {
    await Student.create(
      {
        name: 'Косипор',
        age: 30,
        university: 'давно в айти',
        // Posts: [
        //   {
        //     title: 'Отдыхаем на Мальдивах',
        //     likes: 10000000,
        //   },
        // ],
      }
      // {
      //   include: [Post],
      // }
    );
    // const studentsData = [
    //   {
    //     name: 'Косипор',
    //     age: 18,
    //     university: 'МО АЙТИ =)',
    //   },
    //   {
    //     name: 'Васямба',
    //     age: 24,
    //     university: 'Стендфорд',
    //   },
    //   {
    //     name: 'Мари',
    //     age: 21,
    //     university: 'Яндекс академия',
    //   },
    // ];
    // const students = studentsData.map((student) => ({
    //   ...student,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }));
    // await queryInterface.bulkInsert('Students', students);
  },

  async down() {
    await Student.destroy({ truncate: true });
  },
};
