const React = require('react');
const Layout = require('./Layout');

function Users({ title, users = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Users Page</h1>
      {users.map((user) => (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      ))}
    </Layout>
  );
}

module.exports = Users;
