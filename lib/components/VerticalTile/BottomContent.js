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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Metadata from "../Typography/Metadata";
export var BottomContent = function (_a) {
    var supportingText = _a.supportingText, textLayer = _a.textLayer;
    return (_jsxs("div", __assign({ className: "bottom-content" }, { children: [_jsx(Metadata, __assign({ variant: "02", style: { color: "#6e6e6e" } }, { children: supportingText }), void 0),
            _jsx(Metadata, __assign({ variant: "02", style: { color: "#404040" } }, { children: textLayer }), void 0)] }), void 0));
};
export default BottomContent;
//# sourceMappingURL=BottomContent.js.map