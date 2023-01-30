import { Link } from "react-router-dom";

const Button = ({ route, text }) => {
  return (
    <Link to={route} className="btn btn-secondary mt-2">
      {text}
    </Link>
  );
};

export default Button;
