import React from "react";
import { Link } from "react-router-dom";

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
            <Link className="dropdown-item" to={"/category/"+category}>
              {category[0].toUpperCase()+category.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categorias;
