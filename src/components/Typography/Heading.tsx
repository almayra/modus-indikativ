import React from "react";
import "./typography.scss";
import { ITypography } from "./ITypography";

interface IHeading extends ITypography {
  variant: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
}

const Heading = ({
  bold,
  children,
  className = "",
  style,
  variant = "01",
}: IHeading) => {
  return (
    <div
      style={{ ...style }}
      className={`typography heading-${variant} ${
        bold ? "bold" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Heading;
