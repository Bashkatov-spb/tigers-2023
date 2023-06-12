const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <h1>Main page</h1>
    </Layout>
  );
}

module.exports = MainPage;
