import React from "react";
interface ITableRow extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
    onClick?: any;
    onMouseOver?: any;
}
export declare const TableRow: ({ children, onClick, onMouseOver, ...props }: ITableRow) => JSX.Element;
export default TableRow;
//# sourceMappingURL=TableRow.d.ts.map