const { Student, Post, Comment } = require('./db/models');

async function getStudents() {
  // const students = await Student.findAll({
  //   raw: true,
  //   where: { age: 18 },
  //   attributes: ['name', 'age'],
  // });
  // const students = await Student.findOne({
  //   raw: true,
  //   where: { age: 18 },
  //   attributes: ['name', 'age'],
  // });
  // const students = await Student.findByPk(1, { raw: true });
  // const students = await Student.findAll({
  // raw: true,
  //   include: [{ model: Post, include: [Comment] }],
  // });
  // const students = await Student.findAll({ raw: true, order: [['id', 'ASC']] });
  // const kosipor = await Student.findOne({ where: { name: 'Косипор' } });
  // kosipor.name = 'Косипорина';
  // kosipor.save();
  const result = await Student.findOne({ where: { id: 1 }, include: [Post] });
  console.log(result.Posts);
}

getStudents();
