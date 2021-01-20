import React from "react";
import { ButtonGroup } from "./ButtonGroup";

export const Playground = (args) => <ButtonGroup {...args} />;
Playground.args = { gap: false };

const ButtonGroupStory = {
  title: "Molecule/Button Group",
  component: ButtonGroup,
};

export default ButtonGroupStory;
