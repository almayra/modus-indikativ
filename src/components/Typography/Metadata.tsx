import React from "react";
import "./typography.scss";
import PropTypes from "prop-types";

interface ITypography {
  variant: "01" | "02";
  bold: boolean;
  label: string;
}

export const Typography = ({ variant, bold, label, ...props }: ITypography) => {
  return (
    <div
      className={`typography-metadata-${variant} ${bold ? "bold" : ""}`}
      {...props}
    >
      {label}
    </div>
  );
};

Typography.defaultProps = {
  variant: "01",
  bold: false,
};
