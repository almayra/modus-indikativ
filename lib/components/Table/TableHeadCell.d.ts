import React, { ReactNode } from "react";
import "./table.scss";
interface ITableHeadCell extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
    children?: ReactNode;
    colSpan?: number;
    accent?: boolean;
    prepend?: ReactNode;
    append?: ReactNode;
}
export declare const TableHeadCell: ({ children, colSpan, accent, prepend, append, ...props }: ITableHeadCell) => JSX.Element;
export default TableHeadCell;
//# sourceMappingURL=TableHeadCell.d.ts.map