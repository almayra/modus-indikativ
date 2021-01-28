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
import Metadata from "../Typography/Metadata";
import "./overflow.scss";
export var OverflowItem = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? "default" : _b, className = _a.className;
    return (_jsx("li", __assign({ className: "menu-item " + size + " " + className }, { children: _jsx(Metadata, __assign({ variant: "02" }, { children: children }), void 0) }), void 0));
};
export default OverflowItem;
//# sourceMappingURL=OverflowItem.js.map