import React from "react";

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
      <ul className="dropdown-menu">
        {categoryList.map((category) => (
          <li>
            <a className="dropdown-item" href={category}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categorias;
