import React, { CSSProperties, ReactNode } from "react";
import "./select.scss";
import "../../assets/images/document.png";
interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
    type: "independent-select" | "inline-select";
    children: ReactNode;
    title?: string;
    className?: string;
    containerStyle?: CSSProperties;
    placeholder?: string;
}
export declare const Select: ({ children, title, type, className, containerStyle, placeholder, ...props }: ISelect) => JSX.Element;
export default Select;
//# sourceMappingURL=Select.d.ts.map