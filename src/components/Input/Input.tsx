import React from "react";
import "./input.scss";
// import { FaSort } from "react-icons/fa";
import Label from "./Label";
import BottomText from "./BottomText";

interface IInput extends HTMLInputElement {
  state?: "rest" | "focused" | "error" | "valid";
  // leftcomponent?:
  //   | "empty"
  //   | "text-icon"
  //   | "icon-transparant"
  //   | "icon-container"
  //   | "text";
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

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          verticalAlign: "middle",
          padding: "4px 8px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <FaSort size={16} />
        <div
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Input Label
        </div>
      </div> */}
    </div>
  );
};

Input.defaultProps = {
  state: "rest",
  inputLabel: "Input Label",
  bottomText: "Helper Text",
};
