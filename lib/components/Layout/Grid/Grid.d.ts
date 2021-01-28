import React, { ReactNode } from "react";
declare type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
declare type AlignItems = "flex-start" | "center" | "flex-end";
interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    container?: boolean;
    item?: boolean;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: "01" | "02" | "03" | "04" | "05" | "06" | "07";
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
}
export declare const Grid: ({ children, container, item, xs, sm, md, lg, spacing, justifyContent, alignItems, ...props }: IGrid) => JSX.Element;
export default Grid;
//# sourceMappingURL=Grid.d.ts.map