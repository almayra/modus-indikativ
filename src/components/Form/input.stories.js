import React from "react";
import { Input } from "./Input.tsx";

export default {
  title: "Atom/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
};
