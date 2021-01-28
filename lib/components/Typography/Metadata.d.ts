/// <reference types="react" />
import "./typography.scss";
import { ITypography } from "./ITypography";
interface IMetadata extends ITypography {
    variant?: "01" | "02";
}
declare const Metadata: ({ bold, children, className, style, variant, color, }: IMetadata) => JSX.Element;
export default Metadata;
//# sourceMappingURL=Metadata.d.ts.map