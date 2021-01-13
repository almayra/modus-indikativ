import { Layout } from "./Layout";

const Template = (args) => <Layout {...args} />;

export const OneContent = Template.bind({});
OneContent.args = {
  size: "one-content",
};

export const TwoContent = Template.bind({});
TwoContent.args = {
  size: "two-content",
};

export const FourContent = Template.bind({});
FourContent.args = {
  size: "four-content",
};

const LayoutStory = {
  title: "Atom/Layout",
  component: Layout,
};

export default LayoutStory;
