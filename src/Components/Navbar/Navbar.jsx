import React from "react";
import CartWidget from "./CartWidget";
import Categorias from "./Categorias";

const Navbar = () => {
  const categoryList = ["Hogar", "Tecnologia", "Jardin"];

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Libre Mercado
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <Categorias categoryList={categoryList} />
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
