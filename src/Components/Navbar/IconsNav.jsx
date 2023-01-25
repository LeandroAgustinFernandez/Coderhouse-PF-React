import IconNav from "./IconNav";
import { icons } from "../assets/categories";
import "./IconsNav.css";

const IconsNav = ({ categoryName }) => {
  return (
    <section className="icon-nav">
      {icons.map((icon) => (
        <IconNav
          key={icon.name}
          name={icon.name}
          img={icon.img}
          categoryName={categoryName}
        />
      ))}
    </section>
  );
};

export default IconsNav;
