import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Categories from "./Categories";
import DarkModeToggler from "./DarkModeToggler";
import "./Navbar.css";
import { getCategories } from "../../assets/firebaseConnection";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
const [categoriesFromDb, setCategoriesFromDb] = useState([])
  useEffect(() => {
    getCategories().then(res=>setCategoriesFromDb(res))
  }, [])
  
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
              <li>
                <DarkModeToggler />
              </li>
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
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link isActive" : "nav-link"
                  }
                  aria-current="page"
                  to={"/products"}
                >
                  Productos
                </NavLink>
              </li>
              <Categories categoriesFromDb={categoriesFromDb} />
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
