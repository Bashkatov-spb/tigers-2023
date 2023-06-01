const React = require('react');
const Layout = require('./Layout');

function FormUpdateAnimal({ title, user, animal }) {
  return (
    <Layout title={title} user={user}>
      <form id="update-animal" action={`/animals/${animal.id}`}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Animal name
          </label>
          <input
            value={animal.name}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            value={animal.image}
            name="image"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            animal type
          </label>
          <input
            value={animal.type_id}
            name="type"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            user id
          </label>
          <input
            value={animal.user_id}
            name="user"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update animal
        </button>
      </form>
    </Layout>
  );
}

module.exports = FormUpdateAnimal;
