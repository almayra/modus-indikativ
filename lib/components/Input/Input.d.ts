import { ReactNode } from "react";
import "./input.scss";
import "bootstrap/dist/css/bootstrap.min.css";
interface IInput extends HTMLInputElement {
    state: "rest" | "focused" | "error" | "valid";
    inputText: string;
    inputLabel: string;
    bottomText: string;
    preffix: ReactNode;
    suffix: ReactNode;
    type: "text" | "textarea" | "number" | "password" | "file" | "date";
}
export declare const CInput: ({ state, inputText, inputLabel, bottomText, suffix, preffix, type, }: IInput) => JSX.Element;
export default CInput;
//# sourceMappingURL=Input.d.ts.map