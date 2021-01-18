import React from "react";
import { Button } from "../Button/Button";

export const ButtonPair = () => (
  <div>
    <Button theme="primary">Primary</Button>
    <Button theme="secondary">Secondary</Button>
  </div>
);

export const ModalFooter = () => (
  <div>
    <Button containerStyle={{ width: "50%" }} theme="primary">
      Primary
    </Button>
    <Button
      containerStyle={{ marginLeft: "-1px", width: "50%" }}
      theme="secondary"
    >
      Secondary
    </Button>
  </div>
);

const ButtonGroupStory = {
  title: "Molecule/Button Group",
};

export default ButtonGroupStory;
