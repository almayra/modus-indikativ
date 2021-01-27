import { VerticalTile } from "./VerticalTile";
import IMG from "../../assets/images/1_1.png";

export const Playground = (args) => <VerticalTile {...args} />;
Playground.args = {
  label: "Aa",
  supportingText: "20 Januari 2020",
  textLayer:
    "Orci id massa id lacus. Ullamcorper sed pretium eget faucibus condimentum turpis. Sit diam et varius vitae pharetra tellus euismod a vel adipiscing sed sed.",
  imageSource: IMG,
};

export const CardSectionTile = () => (
  <VerticalTile imageSource={IMG} labelTitle="This is Card Section" />
);

const VerticalTileStory = {
  title: "Organism/Vertical Tile",
  component: VerticalTile,
};

export default VerticalTileStory;
