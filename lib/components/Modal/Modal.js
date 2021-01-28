var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Depth } from "../Depth/Depth";
import "./modal.scss";
export var Modal = function (_a) {
    var size = _a.size, children = _a.children, className = _a.className;
    return (_jsx(Depth, __assign({ depth: "64" }, { children: _jsx("div", __assign({ className: "modal-container " + size + " " + className }, { children: children }), void 0) }), void 0));
};
export default Modal;
//# sourceMappingURL=Modal.js.map