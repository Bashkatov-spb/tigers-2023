const React = require('react');
const Layout = require('./Layout');

function Btn() {
  return (
    <Layout>
      <button type="button" className="btn btn-success">
        Danger
      </button>
    </Layout>
  );
}

module.exports = Btn;
