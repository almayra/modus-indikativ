import React from "react";
import "./subcomponent.scss";
import Label from "../Input/Label";

interface ISubComponent {
  state: "icon" | "text-icon";
  label?: string;
  icon?: React.ReactNode;
  container: boolean;
}

export const SubComponent = ({
  label,
  icon,
  container,
  state,
}: ISubComponent) => {
  const mode = container === true ? "-container" : "";
  return (
    <div className={`component-container ${state}`}>
      <span className={[`sub-component`, mode].join("")}>
        {icon ? icon : null}
        {label ? <Label>{label}</Label> : ""}
      </span>
    </div>
  );
};

export default SubComponent;

SubComponent.defaultProps = {
  label: "",
  container: true,
};
