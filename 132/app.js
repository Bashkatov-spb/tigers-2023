const { Student } = require('./db/models');

async function addStudent() {
  try {
    const result = await Student.create({
      name: 'Санёк',
      age: 30,
      education: true,
      money: 100_000,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function getStudents() {
  try {
    const students = await Student.findAll({
      raw: true,
      where: { id: 1 },
      attributes: ['id', 'name'],
    });
    console.log(students);
  } catch (e) {
    console.log(e);
  }
}

async function getStudent() {
  try {
    const student = await Student.findOne({ raw: true, where: { name: 'Санё' } });
    console.log(student);
  } catch (e) {
    console.log(e);
  }
}

async function updateStudent() {
  try {
    const newStudent = await Student.update({ education: false }, { where: { education: true } });
    console.log(newStudent);
  } catch (e) {
    console.log(e);
  }
}

async function deleteStudent() {
  try {
    const result = await Student.destroy({ where: { money: 100_000 } });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function megaUpdateStudent() {
  try {
    const student = await Student.findOne({ where: { id: 1 } });
    student.education = false;
    student.money = 1_000_000;
    student.save();
    console.log(student);
  } catch (e) {
    console.log(e);
  }
}
megaUpdateStudent();
