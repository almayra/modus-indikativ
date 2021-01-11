import React from "react";
import "./input.scss";
import Label from "./Label";
import BottomText from "./BottomText";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

interface IInput {
  state?: "rest" | "focused" | "error" | "valid";
  inputText: string;
  inputLabel: string;
  bottomText: string;
  prepend: any;
  append: any;
  type?:
    | "text"
    | "textarea"
    | "number"
    | "password"
    | "file"
    | "select"
    | "radio"
    | "checkbox"
    | "date";
}

export const CInput = ({
  state,
  inputText,
  inputLabel,
  bottomText,
  append,
  prepend,
}: IInput) => {
  return (
    <div className={`input-container input-state-${state}`}>
      {inputLabel ? <Label>{inputLabel}</Label> : ""}
      <InputGroup size="sm">
        {prepend ? (
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{prepend}</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
        <Input placeholder={inputText} className="input" />
        {append ? (
          <InputGroupAddon addonType="append">
            <InputGroupText>{append}</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
      </InputGroup>
      {bottomText ? (
        <BottomText className={`input-bottom-text`}>{bottomText}</BottomText>
      ) : (
        ""
      )}
    </div>
  );
};
