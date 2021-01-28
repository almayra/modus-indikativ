import React from "react";
import "./modal.scss";
interface IModal {
    size: "wide" | "xlarge" | "large" | "medium" | "narrow";
    children: React.ReactNode;
    className: string;
}
export declare const Modal: ({ size, children, className }: IModal) => JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map