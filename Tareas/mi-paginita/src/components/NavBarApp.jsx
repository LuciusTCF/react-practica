import React from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = ({ darkMode, changeMode }) => {
  return (
    <div className="sticky-top">
      <nav
        className={`navbar navbar-expand-lg  ${
          darkMode ? "bg-dark navbar-dark" : "bg-body-tertiary"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fa fa-steam" aria-hidden="true"></i>
            Steam
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2 align-items-center justify-content-center ">
              <p className="mb-1">
                <i className="fa fa-adjust" aria-hidden="true"></i>
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onChange={changeMode}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
