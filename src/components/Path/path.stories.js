import { Path } from "./Path";

export const Default = () => (
  <Path stage="start" state="active" component="before" />
);

const PathStory = {
  title: "Molecule/Path",
  component: Path,
};

export default PathStory;
