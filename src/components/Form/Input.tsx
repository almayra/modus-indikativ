import React from "react";
import "./input.scss";
import { BsFileText } from "react-icons/bs";

interface IInput extends HTMLInputElement {
  state?: "rest" | "focused" | "error" | "valid";
  leftComponent?:
    | "empty"
    | "text-icon"
    | "icon-transparant"
    | "icon-container"
    | "text";
  inputText: string;
  inputLabel: boolean;
  bottomText: boolean;
}

export const Input = ({ state, inputText, inputLabel, bottomText }: IInput) => {
  return (
    <div className="input-container">
      {inputLabel === true ? (
        <div className="input-input-label">Input Label</div>
      ) : (
        ""
      )}
      <input
        className={["input", `input-${state}`].join(" ")}
        placeholder={inputText}
      />
      {bottomText === true ? (
        <div className={`input-bottom-text-${state}`}>Helper Text</div>
      ) : (
        ""
      )}
    </div>
  );
};

Input.defaultProps = {
  state: "rest",
  leftComponent: "empty",
  inputLabel: true,
  bottomText: true,
};
