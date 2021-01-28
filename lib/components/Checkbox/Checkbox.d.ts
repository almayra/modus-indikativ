import { CSSProperties } from "react";
import "./checkbox.scss";
interface ICheckbox {
    checked: boolean;
    indeterminate?: boolean;
    theme: "monochrome" | "green";
    size?: "default" | "small" | "xsmall";
    label?: string;
    containerStyle: CSSProperties;
    className?: string;
}
export declare const Checkbox: ({ checked, theme, size, indeterminate, label, containerStyle, className, }: ICheckbox) => JSX.Element;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map