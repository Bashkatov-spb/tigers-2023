const React = require('react');
const Layout = require('./Layout');
const Student = require('./Student');

function Form({ title, zagolovok, name = 'Ne admin' }) {
  const students = [
    {
      id: 1,
      name: 'Vasya',
      age: 30,
    },
    {
      id: 2,
      name: 'Гагик',
      age: 24,
    },
    {
      id: 3,
      name: 'Арджоникидзе',
      age: 30,
    },
    {
      id: 4,
      name: 'Кто-то',
      age: 30,
    },
  ];

  return (
    <Layout title={title} adminka={name}>
      <h1>{zagolovok}</h1>
      {name === 'Admin' ? <h1>Eto admin</h1> : <h1>Eto ne admin</h1>}
      {name === 'Admin' && <h1>Eto admin</h1>}
      <form action="/forma" method="POST">
        <input name="name" type="text" />
        <input name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
      {students.map((asdfasdf) => (
        <Student studentInfo={asdfasdf} />
      ))}
    </Layout>
  );
}
module.exports = Form;
