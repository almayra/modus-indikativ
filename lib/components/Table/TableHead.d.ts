import React from "react";
interface ITableHead extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
    dark?: boolean;
}
export declare const TableHead: ({ children, dark, ...props }: ITableHead) => JSX.Element;
export default TableHead;
//# sourceMappingURL=TableHead.d.ts.map