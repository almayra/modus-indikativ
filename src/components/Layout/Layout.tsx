import React from "react";
import "./layout.scss";

interface ILayout {
  size: "one-content" | "two-content" | "four-content";
}

export const Layout = ({ size }: ILayout) => {
  return <div className={`component-layout ${size}`}></div>;
};
