import React from "react";
import { Typography } from "./Metadata.tsx";

const Template = (args) => <Typography {...args} />;

export const Metadata = Template.bind({});
Metadata.args = {
  variant: "bodyShort",
  label: "The quick brown fox jumps over the lazy dog",
};

const TypographyStory = { title: "Atom/Typography", component: Typography };

export default TypographyStory;
