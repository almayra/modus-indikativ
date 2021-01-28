/// <reference types="react" />
import "./typography.scss";
import { ITypography } from "./ITypography";
interface IBodyLong extends ITypography {
    variant: "01" | "02";
}
declare const BodyLong: ({ bold, children, className, style, variant, color, }: IBodyLong) => JSX.Element;
export default BodyLong;
//# sourceMappingURL=BodyLong.d.ts.map