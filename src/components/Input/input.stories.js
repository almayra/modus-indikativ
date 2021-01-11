import { CInput } from "./Input.tsx";

const Template = (args) => <CInput {...args} />;

export const Rest = Template.bind({});
Rest.args = {
  state: "rest",
  inputText: "Placeholder",
  append: "Input Label",
  prepend: "@",
};

const InputStory = {
  title: "Atom/Input",
  component: CInput,
};

export default InputStory;
