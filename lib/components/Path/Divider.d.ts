/// <reference types="react" />
import "./path.scss";
interface IDivider {
    stage: "before" | "after";
    state: "default" | "active" | "complete" | "lost";
}
export declare const Divider: ({ stage }: IDivider) => JSX.Element;
export default Divider;
//# sourceMappingURL=Divider.d.ts.map