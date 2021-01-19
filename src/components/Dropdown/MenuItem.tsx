import React, { ReactNode } from "react";
import "./dropdown.scss";

interface IMenuItem {
  children: ReactNode;
}

export const MenuItem = ({ children }: IMenuItem) => {
  return <li className="menu-item">{children}</li>;
};

export default MenuItem;
