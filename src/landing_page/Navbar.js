import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ms-3" to="/">
        <img src="media/logo.svg" alt="Logo" style={{ maxWidth: "120px", height: "auto" }} />
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
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
