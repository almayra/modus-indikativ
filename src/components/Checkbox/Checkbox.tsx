import React from "react";
import "./checkbox.scss";

interface ICheckbox {
  checked: boolean;
  indeterminate: boolean;
  theme: "monochrome" | "green";
  size: "default" | "small" | "xsmall";
}

export const Checkbox = ({
  checked,
  theme,
  size,
  indeterminate,
}: ICheckbox) => {
  const renderCheckboxIcon = () => {
    if (indeterminate === true) {
      return `indeterminate ${size}`;
    } else {
      return `checkbox ${size}`;
    }
  };
  return (
    <div className={`container ${theme}`}>
      <input type="checkbox" checked={checked} />
      <span className={renderCheckboxIcon()}></span>
    </div>
  );
};
