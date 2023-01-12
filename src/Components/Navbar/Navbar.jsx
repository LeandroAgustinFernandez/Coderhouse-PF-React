import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Categorias from "./Categorias";
import "./Navbar.css";

const Navbar = () => {
  const categories = [
    "notebook",
    "pc",
    "celulares",
    "tablets",
    "monitores",
    "accesorios",
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Libre Mercado
          </Link>
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
            <ul className="navbar-nav text-end">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link isActive" : "nav-link"
                  }
                  aria-current="page"
                  to={"/"}
                >
                  Inicio
                </NavLink>
              </li>
              <Categorias categoryList={categories} />
            </ul>
            <CartWidget quantity={0} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
