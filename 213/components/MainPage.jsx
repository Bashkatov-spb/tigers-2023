const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Main page</h1>
    </Layout>
  );
}

module.exports = MainPage;
