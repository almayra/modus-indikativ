import React from "react";
import Label from "./Label";
import BottomText from "./BottomText";
import "./input.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
} from "reactstrap";

interface IInput extends HTMLInputElement {
  state: "rest" | "focused" | "error" | "valid";
  inputText: string;
  inputLabel: string;
  bottomText: string;
  prepend: any;
  append: any;
  type:
    | "text"
    | "textarea"
    | "number"
    | "password"
    | "file"
    | "select"
    | "radio"
    | "date";
}

export const CInput = ({
  state,
  inputText,
  inputLabel,
  bottomText,
  append,
  prepend,
  type = "text",
}: IInput) => {
  return (
    <FormGroup className={`input-container input-state-${state}`}>
      {inputLabel ? <Label>{inputLabel}</Label> : ""}
      <InputGroup size="sm">
        {prepend ? (
          <InputGroupAddon addonType="prepend">
            <InputGroupText>{prepend}</InputGroupText>
          </InputGroupAddon>
        ) : (
          ""
        )}
        <Input placeholder={inputText} type={type} className="input" />
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
    </FormGroup>
  );
};
