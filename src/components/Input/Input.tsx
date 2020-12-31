import React from "react";
import "./input.scss";
import Label from "./Label";
import BottomText from "./BottomText";

interface IInput extends HTMLInputElement {
  state?: "rest" | "focused" | "error" | "valid";
  inputText: string;
  inputLabel: string;
  bottomText: string;
}

export const Input = ({ state, inputText, inputLabel, bottomText }: IInput) => {
  return (
    <div>
      <div className={`input-container input-state-${state}`}>
        {inputLabel ? <Label>{inputLabel}</Label> : ""}
        <input className={["input"].join(" ")} placeholder={inputText} />
        {bottomText ? (
          <BottomText className={`input-bottom-text`}>{bottomText}</BottomText>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Input.defaultProps = {
  state: "rest",
  inputLabel: "Input Label",
  bottomText: "Helper Text",
};
