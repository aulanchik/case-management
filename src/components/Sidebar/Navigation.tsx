import navData from "./data";
import { useLocation } from "react-router-dom";
import { ListItem, NavLink } from "./styles";

export const Navigation = () => {
  const location = useLocation();
  const path = location.pathname === "/" ? "/all" : location.pathname;

  return navData.map((item) => {
    const active = item.link === path;
    const icon = active ? item.activeIcon : item.icon;
    return (
      <ListItem key={item.id} $active={active}>
        <NavLink to={item.link} $active={active}>
          <img src={icon} alt="icon" />
          {item.name}
        </NavLink>
      </ListItem>
    );
  });
};
