const React = require('react');
const Layout = require('./Layout');
const ProductItem = require('./ProductItem');

function ProductsPage({ products, user }) {
  return (
    <Layout user={user}>
      <h1>Products Page</h1>
      <div className="products_list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = ProductsPage;
