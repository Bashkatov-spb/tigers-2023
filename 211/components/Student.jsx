const React = require('react');

function Student({ studentInfo }) {
  return (
    <>
      <h4 style={{ border: '1px solid red' }} className="title">
        Информация о студенте
      </h4>
      <p key={studentInfo.id}>
        <h2>{studentInfo.name}</h2>
        <h4>{studentInfo.age}</h4>
      </p>
    </>
  );
}

module.exports = Student;
