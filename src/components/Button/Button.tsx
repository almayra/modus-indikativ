import React from "react";
import "./button.scss";
import { FiChevronDown } from "react-icons/fi";
import { BsFileText } from "react-icons/bs";

interface IButton {
  theme: "primary" | "secondary" | "tertiary" | "danger";
  state?: "rest" | "hover" | "onclick" | "disabled";
  size?: "small" | "medium" | "large";
  label: string;
  prepend: boolean;
  append: boolean;
}

export const Button = ({
  theme,
  size,
  state,
  label,
  prepend,
  append,
  ...props
}: IButton) => {
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, `btn-${theme}-${state}`].join(" ")}
      {...props}
    >
      {prepend === true ? <BsFileText className="btn-prepend" /> : ""}
      {label}
      {append === true ? <FiChevronDown className="btn-append" /> : ""}
    </button>
  );
};

Button.defaultProps = {
  state: "rest",
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};
