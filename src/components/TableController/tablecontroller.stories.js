import { TableController } from "./TableController";

export const PlayGround = (args) => <TableController {...args} />;
PlayGround.args = {
  searchBar: "Cari...",
  checkboxLabel: "Menu",
  buttonLabel: "Button Primary",
};

const TableControllerStory = {
  title: "Molecule/Table Controller",
  component: TableController,
};

export default TableControllerStory;
