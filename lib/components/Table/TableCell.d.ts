import React, { ReactNode } from "react";
interface ITableCell extends React.HTMLAttributes<HTMLTableDataCellElement> {
    children: React.ReactNode;
    colSpan?: number;
    bold?: boolean;
    prepend?: ReactNode;
    dualString?: boolean;
}
export declare const TableCell: ({ children, bold, prepend, dualString, colSpan, ...props }: ITableCell) => JSX.Element;
export default TableCell;
//# sourceMappingURL=TableCell.d.ts.map