import { ReactNode } from "react";
import "./dropdown.scss";
interface IDropdown {
    dropdownTitle: string;
    prepend?: boolean;
    append?: boolean;
    dropdownLabel?: string;
    children: ReactNode;
}
export declare const Dropdown: ({ dropdownTitle, prepend, append, dropdownLabel, children, }: IDropdown) => JSX.Element;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map