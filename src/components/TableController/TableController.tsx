import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Settings32 } from "@carbon/icons-react";

export const TableController = () => {
  return (
    <div
      style={{
        padding: 16,
        backgroundColor: "#F1F1F1",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        justifyContent: "space-between",
      }}
    >
      <Searchbar width="388px" placeholder="Cari..." />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 18,
          alignItems: "center",
        }}
      >
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={false}
          label="Menu"
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={false}
          label="Menu"
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label="Menu"
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label="Menu"
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label="Menu"
        />
        <Settings32 />
      </div>
      <Button theme="primary">Button Primary</Button>
    </div>
  );
};
