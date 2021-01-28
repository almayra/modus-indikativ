import { ReactNode } from "react";
import "./sidebar.scss";
interface ISubMenu {
    label: string;
    active?: boolean;
    children?: ReactNode;
}
export declare const SubMenu: ({ label, active, children }: ISubMenu) => JSX.Element;
export default SubMenu;
//# sourceMappingURL=SubMenu.d.ts.map