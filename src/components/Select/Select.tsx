import React, { ReactNode } from "react";
import BodyShort from "../Typography/BodyShort";
import "./select.scss";
import "../../assets/images/document.png";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  type: "independent-select" | "inline-select";
  children: ReactNode;
  title: string;
}

export const Select = ({ children, title, type }: ISelect) => {
  return (
    <div className="select-component">
      {title ? <BodyShort variant="01">{title}</BodyShort> : ""}
      <select className={`${type}`}>
        <option>Placeholder Text</option>
      </select>
    </div>
  );
};
