const React = require('react');
const Layout = require('./Layout');
const AnimalItem = require('./AnimalItem');
const FormAddAnimal = require('./FormAddAnimal');

function Animals({ title, animals = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Animals Page</h1>
      <FormAddAnimal />
      <div className="animals_list">
        {animals.map((animal) => (
          <AnimalItem animal={animal} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Animals;
