import React from "react";
import "./parentlist.scss";
import { Settings24, ChevronDown24 } from "@carbon/icons-react";

// interface IParentList {}

export const ParentList = () => {
  return (
    <div className="parent-list">
      <div className="title">Jagung Pipil</div>
      <div className="wrapper">
        <div className="icon">
          <Settings24 />
        </div>
        <div className="icon">
          <ChevronDown24 />
        </div>
      </div>
    </div>
  );
};
