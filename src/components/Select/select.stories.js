import { Select } from "./Select";

const Template = (args) => <Select {...args} />;

export const IndependentSelect = Template.bind({});
IndependentSelect.args = {
  title: "Select Title",
  type: "independent-select",
};

export const InlineSelect = Template.bind({});
InlineSelect.args = {
  title: "Select Title",
  type: "inline-select",
};

const SelectStory = {
  title: "Atom/Select",
  component: Select,
};

export default SelectStory;
