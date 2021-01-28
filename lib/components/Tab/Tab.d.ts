import React from "react";
import "./tab.scss";
interface ITab {
    version: "version-1" | "version-2" | "version-3";
    status: "selected" | "unselected" | "hover";
    inputLabel: string;
    icon?: React.ReactNode;
}
export declare const Tab: ({ version, status, inputLabel, icon }: ITab) => JSX.Element;
export default Tab;
//# sourceMappingURL=Tab.d.ts.map