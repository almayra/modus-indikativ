import { ReactNode } from "react";
import "./path.scss";
interface IPath {
    stage: "start" | "middle" | "end";
    state: "default" | "active" | "complete" | "lost";
    right?: boolean;
    left?: boolean;
    children: ReactNode;
}
export declare const Path: ({ stage, state, right, left, children }: IPath) => JSX.Element;
export default Path;
//# sourceMappingURL=Path.d.ts.map