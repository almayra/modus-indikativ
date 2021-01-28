import { ReactNode } from "react";
import "./sidebar.scss";
interface IMenu {
    label: string;
    icon?: boolean;
    children?: ReactNode;
}
export declare const Menu: ({ label, icon, children }: IMenu) => JSX.Element;
export default Menu;
//# sourceMappingURL=Menu.d.ts.map