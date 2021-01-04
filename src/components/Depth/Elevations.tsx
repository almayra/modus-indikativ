import React from "react";
import "./elevations.scss";

interface IElevations {
  depth: "4" | "8" | "16" | "64";
  inputLabel: string;
}

export const Elevations = ({ depth, inputLabel }: IElevations) => {
  return (
    <div className={`component-depth-${depth}`}>
      <div className="component-depth card"> {inputLabel} </div>
    </div>
  );
};
