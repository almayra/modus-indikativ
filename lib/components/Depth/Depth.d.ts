import React from "react";
import "../../sass-modules/_depth.scss";
interface IDepth {
    depth: "4" | "8" | "16" | "64";
    children: React.ReactNode;
}
export declare const Depth: ({ depth, children }: IDepth) => JSX.Element;
export default Depth;
//# sourceMappingURL=Depth.d.ts.map