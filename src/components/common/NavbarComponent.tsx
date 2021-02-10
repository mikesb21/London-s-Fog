// React
import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg secondary-background">
        <div className="container-fluid">
          <Link className="navbar-brand secondary-text font-weight-bold" to="/">
            London's Fog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link secondary-text active"
                  to="/whats-on-your-mind"
                  aria-current="page"
                >
                  What's on your mind?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link secondary-text"
                  aria-current="page"
                  to="/"
                >
                  Show me where I was
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-info secondary-text" to="/">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
