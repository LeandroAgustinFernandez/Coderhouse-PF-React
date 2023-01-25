import { Link } from "react-router-dom";

const IconNav = ({ name, img, categoryName }) => {
  const classIcon =
    categoryName && categoryName === name
      ? "card-img-top w-100 icon-nav_selected"
      : "card-img-top w-100";
  const classArticle = categoryName && categoryName === name ? "selected" : "";
  return (
    <Link to={`/category/${name}`}>
      <article className={classArticle}>
        <img src={`../img/icons/${img}`} className={classIcon} alt={name} />
      </article>
    </Link>
  );
};

export default IconNav;
