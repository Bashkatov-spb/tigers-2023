const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Main
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/users">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/animals">
                Animals
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active google"
                aria-current="page"
                href="https://www.google.com"
              >
                google.com
              </a>
            </li>
            <p>
              Hello, {user.name}
              !!!
            </p>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
