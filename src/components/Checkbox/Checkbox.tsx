import React from "react";
import "./checkbox.scss";

interface ICheckbox {
  checked: boolean;
  indeterminate: boolean;
  theme: "monochrome" | "green";
  size: "default" | "small" | "xsmall";
  label?: string;
}

export const Checkbox = ({
  checked,
  theme = "monochrome",
  size = "default",
  indeterminate,
  label,
}: ICheckbox) => {
  const renderCheckboxIcon = () => {
    if (indeterminate === true) {
      return `indeterminate ${size}`;
    } else {
      return `checkbox ${size}`;
    }
  };
  return (
    <div className={`container-component ${theme}`}>
      <input type="checkbox" checked={checked} />
      <span className={renderCheckboxIcon()}></span>
      {label ? <label style={{ marginLeft: 30 }}>{label}</label> : ""}
    </div>
  );
};
