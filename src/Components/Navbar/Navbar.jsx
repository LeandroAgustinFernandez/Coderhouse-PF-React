import { Link, NavLink, useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";
import Categories from "./Categories";
import DarkModeToggler from "./DarkModeToggler";
import {
  auth,
  getCategories,
  userLogOut,
} from "../../assets/firebaseConnection";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [categoriesFromDb, setCategoriesFromDb] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    getCategories().then((res) => setCategoriesFromDb(res));
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setUsername(user.displayName) : setUsername("");
    });
  }, []);

  const handleLogout = () => {
    userLogOut();
    navigate("/");
  };

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
            {username === "" ? (
              <Link to={"./login"} className="navbar-user">
                <i className="fa fa-user fa-2x"></i>
              </Link>
            ) : (
              <span className="text-white">
                {username}{" "}
                <button onClick={handleLogout} className="btn">
                  <i className="fa fa-arrow-right text-white"></i>
                </button>
              </span>
            )}
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
