import React, { ReactNode } from "react";
import "./table.scss";
interface ITable extends React.HTMLAttributes<HTMLTableElement> {
    children: ReactNode;
    className?: string;
    bordered?: boolean;
}
export declare const Table: ({ children, className, bordered, ...props }: ITable) => JSX.Element;
export default Table;
//# sourceMappingURL=Table.d.ts.map