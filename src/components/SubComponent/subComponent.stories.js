import React from "react";
import { SubComponent } from "./SubComponent";
import { ChevronSort16 } from "@carbon/icons-react";

const Template = (args) => <SubComponent {...args} />;

export const IconWithText = Template.bind({});
IconWithText.args = {
  state: "text-icon",
  label: "Input label",
  icon: <ChevronSort16 className="sub-component icon" />,
};

export const Text = Template.bind({});
Text.args = {
  state: "text-icon",
  label: "Input label",
  icon: "",
};

export const Icon = Template.bind({});
Icon.args = {
  state: "icon",
  label: "",
  icon: <ChevronSort16 className="sub-component icon" />,
};

const SubComponentStory = {
  title: "Atom/Sub Component",
  component: SubComponent,
};

export default SubComponentStory;
