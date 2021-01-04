import { Badge } from "./Badge";
import { Document16 } from "@carbon/icons-react";

const Template = (args) => <Badge {...args} />;

export const Gray = Template.bind({});
Gray.args = {
  color: "gray",
  icon: <Document16 className="sub-component icon" />,
};

export const LigthGray = Template.bind({});
LigthGray.args = {
  color: "light-gray",
  icon: <Document16 className="sub-component icon" />,
};

export const White = Template.bind({});
White.args = {
  color: "white",
  icon: <Document16 className="sub-component icon" />,
};

export const Green = Template.bind({});
Green.args = {
  color: "green",
  icon: <Document16 className="sub-component icon" />,
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
  icon: <Document16 className="sub-component icon" />,
};

const BadgeStory = {
  title: "Atom/Badge",
  component: Badge,
};

export default BadgeStory;
