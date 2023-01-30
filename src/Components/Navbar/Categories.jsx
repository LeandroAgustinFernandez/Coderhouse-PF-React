import { NavLink } from "react-router-dom";

const Categories = ({ categoriesFromDb }) => {
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
        {categoriesFromDb.map((category) => (
          <li key={category.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "dropdown-item isActive" : "dropdown-item"
              }
              to={"/category/" + category.key}
            >
              {category.description}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categories;
