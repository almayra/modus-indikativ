import { CInput } from "./Input.tsx";
const Template = (args) => <CInput {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
  append: "Input Label",
  prepend: "@",
};

export const Focused = Template.bind({});
Focused.args = {
  state: "focused",
  inputText: "Placeholder",
  append: "Input Label",
  prepend: "@",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
  inputText: "Placeholder",
  append: "Input Label",
  prepend: "@",
};

export const Valid = Template.bind({});
Valid.args = {
  state: "valid",
  inputText: "Placeholder",
  append: "Input Label",
  prepend: "@",
};

const InputStory = {
  title: "Molecule/Form",
  component: CInput,
};

export default InputStory;
