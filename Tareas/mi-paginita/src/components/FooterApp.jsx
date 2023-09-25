import React from "react";
import { Link } from "react-router-dom";

const FooterApp = ({ darkMode }) => {
  return (
    <div
      className={`container-fluid py-4 ${
        darkMode ? "bg-dark" : "bg-body-tertiary"
      }`}
    >
      <div className="row flex-column flex-md-row align-items-center gap-3">
        <div className="col-12 logo-footer text-center navbar-footer-brand">
          <Link className={`navbar-brand ${darkMode && "text-white"}`} to="/">
            <i
              className={`fa fa-steam ${darkMode && "text-white"}`}
              aria-hidden="true"
            ></i>
            Steam
          </Link>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Link
            className={`text-decoration-none mx-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={`text-decoration-none mx-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
            to="/contact"
          >
            Contacto
          </Link>
        </div>
        <div className={`col-12 text-center ${darkMode && "text-white"}`}>
          <small>
            &copy;Steam 2023. Todos los derechos reservados. Todas las marcas
            registradas pertenecen a sus respectivos dueños en EE. UU. y otros
            países. Todos los precios incluyen IVA (donde sea aplicable).
          </small>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
