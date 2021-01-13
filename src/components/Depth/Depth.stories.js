import { Depth } from "./Depth";
import { Source } from "@storybook/addon-docs/blocks";

const Template = (args) => (
  <Depth {...args}>
    <Source
      language={"js"}
      code={`//import
      import {Depth} from "./Depth"
      //use
      <Depth depth="4 | 8 | 16 | 64">{children}</Depth>
      `}
    />
  </Depth>
);

export const DepthShadow = Template.bind({});
DepthShadow.args = {
  depth: "4",
};

const ElevationStory = {
  title: "Atom/Depth",
  component: Depth,
};

export default ElevationStory;
