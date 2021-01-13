import { Checkbox } from "./Checkbox.tsx";

const Template = (args) => <Checkbox {...args} />;

export const Monochrome = Template.bind({});
Monochrome.args = {
  theme: "monochrome",
  size: "default",
};

export const Green = Template.bind({});
Green.args = {
  theme: "green",
  size: "default",
};

const CheckboxStory = {
  title: "Atom/Checkbox",
  component: Checkbox,
};

export default CheckboxStory;
