import React from "react";
import "./typography.scss";
import { ITypography } from "./ITypography";

interface IBodyShort extends ITypography {
  variant?: "01" | "02";
}

const BodyShort = ({
  bold,
  children,
  className = "",
  style,
  variant = "01",
}: IBodyShort) => {
  return (
    <div
      style={{ ...style }}
      className={`typography body-short-${variant} ${
        bold ? "bold" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BodyShort;
