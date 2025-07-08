import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export const Navigation = ({ children }) => (
  <nav>
    <ul className="nav-list">{children}</ul>
  </nav>
);

export const NavItem = ({ path, text, exact,style }) => {
return (
  <li className="nav-list__item">
    <NavLink
      to={path}
      className={"nav-list__item-link"}
      activeClassName="nav-list__item-link--active"
      exact={exact}
      style={style}
    >
      {text}
    </NavLink>
  </li>
);}
