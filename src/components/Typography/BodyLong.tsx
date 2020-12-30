import React from "react";
import "./typography.scss";
import { ITypography } from "./ITypography";

interface IBodyLong extends ITypography {
  variant: "01" | "02";
}

const BodyLong = ({
  bold,
  children,
  className = "",
  style,
  variant = "01",
}: IBodyLong) => {
  return (
    <div
      style={{ ...style }}
      className={`typography body-long-${variant} ${
        bold ? "bold" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BodyLong;
