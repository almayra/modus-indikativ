import React, { CSSProperties, ReactNode } from "react";
import BodyShort from "../Typography/BodyShort";
import "./select.scss";
import "../../assets/images/document.png";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  type: "independent-select" | "inline-select";
  children: ReactNode;
  title?: string;
  className?: string;
  containerStyle?: CSSProperties;
}

export const Select = ({
  children,
  title,
  type,
  className,
  containerStyle,
  ...props
}: ISelect) => {
  return (
    <div className="select-component">
      {title ? <BodyShort variant="01">{title}</BodyShort> : ""}
      <select
        style={containerStyle}
        {...props}
        className={`${type} ${className}`}
      >
        {children}
      </select>
    </div>
  );
};
