import React from "react";
import { NavLink } from "react-router-dom";

const Categorias = ({ categoryList }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="/"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorias
      </a>
      <ul className="dropdown-menu text-end">
        {categoryList.map((category) => (
          <li key={category}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "dropdown-item isActive" : "dropdown-item"
              }
              to={"/category/" + category}
            >
              {category[0].toUpperCase() + category.substring(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categorias;
