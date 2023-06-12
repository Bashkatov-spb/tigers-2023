const React = require('react');
const Layout = require('./Layout');
const ProductItem = require('./ProductItem');

function Favourites({ user, favourites }) {
  return (
    <Layout user={user}>
      <h1>Favourites page</h1>
      {favourites.map((order) => (
        <ProductItem product={favourites[0].dataValues.Product} />
      ))}
    </Layout>
  );
}
module.exports = Favourites;
