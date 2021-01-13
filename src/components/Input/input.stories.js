import { CInput } from "./Input.tsx";
const Template = (args) => <CInput {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
  prepend: "@",
  append: "Input Label",
};

export const Focused = Template.bind({});
Focused.args = {
  state: "focused",
  inputText: "Placeholder",
  prepend: "@",
  append: "Input Label",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
  inputText: "Placeholder",
  prepend: "@",
  append: "Input Label",
};

export const Valid = Template.bind({});
Valid.args = {
  state: "valid",
  inputText: "Placeholder",
  prepend: "@",
  append: "Input Label",
};

const InputStory = {
  title: "Molecule/Form/Form Field",
  component: CInput,
};

export default InputStory;
