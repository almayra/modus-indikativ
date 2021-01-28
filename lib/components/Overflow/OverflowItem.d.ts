import { ReactNode } from "react";
import "./overflow.scss";
interface IOverflowItem {
    children: ReactNode;
    size?: "small" | "default" | "large";
    className: string;
}
export declare const OverflowItem: ({ children, size, className, }: IOverflowItem) => JSX.Element;
export default OverflowItem;
//# sourceMappingURL=OverflowItem.d.ts.map