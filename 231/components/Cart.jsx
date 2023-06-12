const React = require('react');
const Layout = require('./Layout');
const ProductItem = require('./ProductItem');

function Cart({ products, user }) {
  console.log(products.Orders[0].Product);
  return (
    <Layout user={user}>
      <h1>Cart page</h1>
      {products.Orders.map((order) => (
        <ProductItem product={order.Product} />
      ))}
    </Layout>
  );
}

module.exports = Cart;
