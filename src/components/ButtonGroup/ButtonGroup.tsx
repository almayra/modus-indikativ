import React from "react";
import { Button } from "../Button/Button";
import "./buttongroup.scss";

interface IButtonGroup {
  wrapper: boolean;
}

export const ButtonGroup = ({ wrapper }: IButtonGroup) => {
  return (
    <span className={`button-group ${wrapper ? "wrapper" : ""} `}>
      <Button theme="primary">Button</Button>
      <Button theme="secondary">Button</Button>
      <Button theme="tertiary">Button</Button>
    </span>
  );
};
