import React from "react";
import "./typography.scss";
import { ITypography } from "./ITypography";

interface IMetadata extends ITypography {
  variant?: "01" | "02";
}

const Metadata = ({
  bold,
  children,
  className = "",
  style,
  variant = "01",
}: IMetadata) => {
  return (
    <div
      style={{ ...style }}
      className={`typography metadata-${variant} ${
        bold ? "bold" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Metadata;
