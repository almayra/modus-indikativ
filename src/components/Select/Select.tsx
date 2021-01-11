import React, { ReactNode } from "react";
import BodyShort from "../Typography/BodyShort";
import "./select.scss";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  title: string;
}

export const Select = ({ children, title }: ISelect) => {
  return (
    <div className="select-component">
      {title ? <BodyShort variant="01">{title}</BodyShort> : ""}
      <select>{children}</select>
    </div>
  );
};
