import { Select } from "./Select";

const Template = (args) => <Select {...args} />;

export const ISelect = Template.bind({});
ISelect.args = {
  title: "Select Title",
};

const SelectStory = {
  title: "Atom/Select",
  component: Select,
};

export default SelectStory;
