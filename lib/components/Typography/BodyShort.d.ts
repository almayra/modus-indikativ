/// <reference types="react" />
import "./typography.scss";
import { ITypography } from "./ITypography";
interface IBodyShort extends ITypography {
    variant?: "01" | "02";
}
declare const BodyShort: ({ bold, children, className, style, variant, color, }: IBodyShort) => JSX.Element;
export default BodyShort;
//# sourceMappingURL=BodyShort.d.ts.map