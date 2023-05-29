const React = require('react');

function Layout({ title, children, adminka }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="style.css" />
        <script src="script.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
