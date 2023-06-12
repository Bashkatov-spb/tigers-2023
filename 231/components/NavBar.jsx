const React = require('react');

function NavBar({ user = {} }) {
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
              <a className="nav-link active" aria-current="page" href="/products">
                Products
              </a>
            </li>

            {user.name ? (
              <>
                <p>
                  Hello, {user.name}
                  !!!
                </p>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/favourites">
                    Favourites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/cart">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/api/auth/logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/registration">
                    Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/authorization">
                    Authorization
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
