import { Link } from "react-router-dom";
import { homeNavlink, navbarNavlink } from "../utils/utils";

const CustomNavLink = ({ to, heading, component }) => {
  return (
    <Link to={`/${to}`}>
      <h1 className={component === "nav" ? navbarNavlink : homeNavlink}>
        {heading}
      </h1>
    </Link>
  );
};

export default CustomNavLink;
