import React from "react";
import { Tab } from "./Tab";
import { RadioButton16 } from "@carbon/icons-react";
import "./tab.scss";

const Template = (args) => <Tab {...args} />;

export const Version1 = Template.bind({});
Version1.args = {
  version: "version-1",
  status: "selected",
  inputLabel: "Menu Title",
};

export const Version2 = Template.bind({});
Version2.args = {
  version: "version-2",
  status: "selected",
  inputLabel: "Menu Title",
};

export const Version3 = Template.bind({});
Version3.args = {
  version: "version-3",
  status: "selected",
  inputLabel: "Menu Title",
  icon: <RadioButton16 className="icon" />,
};

const TabStory = {
  title: "Atom/Tab",
  component: Tab,
};

export default TabStory;
