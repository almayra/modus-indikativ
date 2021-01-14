import React from "react";
import { Button } from "./Button.tsx";
import { Document16 } from "@carbon/icons-react";

const Prepend = () => <Button prepend={<Document16 />}>Prepend</Button>;
const Append = () => <Button append={<Document16 />}>Append</Button>;
const PrependSplit = () => (
  <Button split prepend={<Document16 />}>
    Prepend Split
  </Button>
);
const AppendSplit = () => (
  <Button split append={<Document16 />}>
    Append Split
  </Button>
);

export const Playground = (args) => <Button {...args} />;
Playground.args = { children: "Button Text" };

export const Variants = () => (
  <div>
    <Button theme="primary">Primary</Button>
    <Button theme="secondary">Secondary</Button>
    <Button theme="tertiary">Tertiary</Button>
    <Button theme="danger">Danger</Button>
  </div>
);

export const Size = () => (
  <div>
    <Button theme="primary" size="small">
      Small
    </Button>
    <Button theme="primary">Medium</Button>
    <Button theme="primary" size="large">
      Large
    </Button>
  </div>
);

export const Disable = () => (
  <div>
    <Button theme="primary">Rest</Button>
    <Button theme="primary" disabled>
      Disabled
    </Button>
  </div>
);

export const WithIcon = () => (
  <div>
    <Prepend />
    <PrependSplit />
    <Append />
    <AppendSplit />
  </div>
);

const ButtonStory = {
  title: "Atom/Button",
  component: Button,
};

export default ButtonStory;
