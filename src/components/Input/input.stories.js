import React from "react";
import { Input } from "./Input.tsx";

const Template = (args) => <Input {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
};

const InputStory = {
  title: "Atom/Input",
  component: Input,
};

export default InputStory;
