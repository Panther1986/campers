import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Navigation;
