import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

interface ITableController {
  searchBar: string;
  checkboxLabel: string;
  buttonLabel: string;
}

export const TableController = ({
  searchBar,
  checkboxLabel,
  buttonLabel,
}: ITableController) => {
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
      <Searchbar width="388px" placeholder={searchBar} />
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
          label={checkboxLabel}
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={false}
          label={checkboxLabel}
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label={checkboxLabel}
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label={checkboxLabel}
        />
        <Checkbox
          containerStyle={{ height: 24 }}
          theme="monochrome"
          checked={true}
          label={checkboxLabel}
        />
      </div>
      <Button theme="primary">{buttonLabel}</Button>
    </div>
  );
};
