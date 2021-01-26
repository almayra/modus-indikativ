import React from "react";
import { Divider } from "./Divider";
import "./path.scss";
import { Checkmark16 } from "@carbon/icons-react";

interface IPath {
  stage: "start" | "middle" | "end";
  state: "default" | "active" | "complete" | "lost";
  component: "before" | "after";
}

export const Path = ({ stage, state, component }: IPath) => {
  return (
    <div className={`path ${state}`}>
      <div className={`${stage}`}>
        <Checkmark16 />
      </div>
      <div className={`divider-${component}`}></div>
    </div>
  );
};
