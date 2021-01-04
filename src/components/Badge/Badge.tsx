import React from "react";
import "./badge.scss";

interface IBadge {
  color: "gray" | "light-gray" | "white" | "green" | "red";
  inputLabel: string;
  icon?: React.ReactNode;
}

export const Badge = ({ color, inputLabel, icon }: IBadge) => {
  return (
    <div className={`label-component label-${color}`}>
      <span className={["label"].join("")}>
        {icon ? icon : null}
        {inputLabel}
      </span>
    </div>
  );
};

Badge.defaultProps = {
  inputLabel: "Label",
};
