import React, { CSSProperties, ReactNode } from "react";
import "./button.scss";
interface IButton {
    theme: "primary" | "secondary" | "tertiary" | "danger";
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
    append?: ReactNode;
    prepend?: ReactNode;
    split?: boolean;
    containerStyle?: CSSProperties;
}
export declare const Button: {
    ({ theme, size, children, append, prepend, split, containerStyle, ...props }: IButton): JSX.Element;
    defaultProps: {
        state: string;
        backgroundColor: null;
        size: string;
        onClick: undefined;
    };
};
export default Button;
//# sourceMappingURL=Button.d.ts.map