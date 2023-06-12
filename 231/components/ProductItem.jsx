const React = require('react');

function ProductItem({ product }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.cost}</p>
        <p className="card-text">{product.count}</p>
        <a href={`/products/${product.id}`} className="btn btn-primary">
          Show more
        </a>
        <button data-id={product.id} className="btn btn-secondary add-fav" type="button">
          Add to favourites
        </button>
        <button data-id={product.id} className="btn btn-secondary add-cart" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

module.exports = ProductItem;
