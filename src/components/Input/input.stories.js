import React from "react";
import { Input } from "./Input.tsx";

const Template = (args) => <Input {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
};

export const Focused = Template.bind({});
Focused.args = {
  state: "focused",
  inputText: "Placeholder",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
  inputText: "Placeholder",
};

export const Valid = Template.bind({});
Valid.args = {
  state: "valid",
  inputText: "Placeholder",
};

const InputStory = {
  title: "Atom/Input",
  component: Input,
};

export default InputStory;
