import { Elevations } from "./Elevations";

const Template = (args) => <Elevations {...args} />;

export const Depth4 = Template.bind({});
Depth4.args = {
  depth: "4",
  inputLabel: "Depth 4",
};

export const Depth8 = Template.bind({});
Depth8.args = {
  depth: "8",
  inputLabel: "Depth 8",
};

export const Depth16 = Template.bind({});
Depth16.args = {
  depth: "16",
  inputLabel: "Depth 16",
};

export const Depth64 = Template.bind({});
Depth64.args = {
  depth: "64",
  inputLabel: "Depth 64",
};

const ElevationStory = {
  title: "Atom/Elevation",
  component: Elevations,
};

export default ElevationStory;
