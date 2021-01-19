import React, { ReactNode } from "react";
import Metadata from "../Typography/Metadata";
import "./overflow.scss";

interface IOverflowItem {
  children: ReactNode;
  size?: "small" | "default" | "large";
}

export const OverflowItem = ({ children, size = "default" }: IOverflowItem) => {
  return (
    <li className={`menu-item ${size}`}>
      <Metadata variant="02">{children}</Metadata>
    </li>
  );
};

export default OverflowItem;
