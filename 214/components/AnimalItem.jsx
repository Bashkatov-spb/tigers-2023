const React = require('react');

function AnimalItem({ animal }) {
  const user_id = 1;
  const result = animal.Likes.find((like) => like.dataValues.user_id === user_id);
  return (
    <div data-id={animal.id} className="card" style={{ width: '18rem', margin: '5px' }}>
      <img src={animal.image} className="card-img-top" alt="animal" />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href={`/animals/${animal.id}`} className="btn btn-primary">
          Info
        </a>
        <button type="button" className="btn btn-danger btn-delete">
          Delete
        </button>
        <a href={`/form-update-animal/${animal.id}`} className="btn btn-warning btn-">
          Update
        </a>
        <div className="like__container">
          <img className="like" src={!result ? 'like_empty.png' : 'like_full.png'} alt="like" />
          <p className="count">{animal.Likes.length}</p>
        </div>
      </div>
    </div>
  );
}

module.exports = AnimalItem;
