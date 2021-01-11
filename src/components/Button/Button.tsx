import React from "react";
import "./button.scss";
import { FiChevronDown } from "react-icons/fi";
import { BsFileText } from "react-icons/bs";

interface IButton {
  theme: "primary" | "secondary" | "tertiary" | "danger";
  state: "rest" | "hover" | "onclick" | "disabled";
  size: "small" | "medium" | "large";
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
      className={[
        "component-btn",
        `component-btn-${size}`,
        `component-btn-${theme}-${state}`,
      ].join(" ")}
      {...props}
    >
      {prepend === true ? <BsFileText className="component-btn-prepend" /> : ""}
      {label}
      {append === true ? (
        <FiChevronDown className="component-btn-append" />
      ) : (
        ""
      )}
    </button>
  );
};

Button.defaultProps = {
  state: "rest",
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};
