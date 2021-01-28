import React from "react";
import "./addon.scss";
interface IAddon {
    state: "icon" | "text-icon";
    label: string;
    icon?: React.ReactNode;
    container: boolean;
}
export declare const Addon: {
    ({ label, icon, container, state }: IAddon): JSX.Element;
    defaultProps: {
        label: string;
        container: boolean;
    };
};
export default Addon;
//# sourceMappingURL=Addon.d.ts.map