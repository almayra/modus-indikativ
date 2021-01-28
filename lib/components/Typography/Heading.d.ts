/// <reference types="react" />
import "./typography.scss";
import { ITypography } from "./ITypography";
interface IHeading extends ITypography {
    variant: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
}
declare const Heading: ({ bold, children, className, style, variant, color, }: IHeading) => JSX.Element;
export default Heading;
//# sourceMappingURL=Heading.d.ts.map