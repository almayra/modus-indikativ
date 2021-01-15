import React, { ReactNode } from "react";
import "./badge.scss";

interface IBadge {
  color: "gray" | "light-gray" | "white" | "green" | "red" | "yellow";
  inputLabel: ReactNode;
  icon?: React.ReactNode;
}

export const Badge = ({ color = "gray", inputLabel, icon }: IBadge) => {
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
