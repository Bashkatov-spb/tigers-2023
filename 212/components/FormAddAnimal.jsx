const React = require('react');

function FormAddAnimal() {
  return (
    <form action="/animals" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Animal name
        </label>
        <input
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
        <input name="image" type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add animal
      </button>
    </form>
  );
}

module.exports = FormAddAnimal;
