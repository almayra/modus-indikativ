import React from "react";
import "./checkbox.scss";

interface ICheckbox {
  checked: boolean;
  theme: "monochrome" | "green";
  size: "default" | "small" | "xsmall";
}

export const Checkbox = ({ checked, theme, size }: ICheckbox) => {
  return (
    <div className={`container ${theme}`}>
      <input type="checkbox" checked={checked} />
      <span className={`checkbox ${size}`}></span>
    </div>
  );
};
