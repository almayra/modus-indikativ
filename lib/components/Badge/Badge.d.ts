import React, { ReactNode } from "react";
import "./badge.scss";
interface IBadge {
    color: "gray" | "light-gray" | "white" | "green" | "red" | "yellow";
    inputLabel: ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
export declare const Badge: {
    ({ color, inputLabel, icon, className, }: IBadge): JSX.Element;
    defaultProps: {
        inputLabel: string;
    };
};
export default Badge;
//# sourceMappingURL=Badge.d.ts.map