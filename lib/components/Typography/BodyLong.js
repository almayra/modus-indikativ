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
import "./typography.scss";
var BodyLong = function (_a) {
    var bold = _a.bold, children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, style = _a.style, _c = _a.variant, variant = _c === void 0 ? "01" : _c, color = _a.color;
    return (_jsx("div", __assign({ style: __assign({ color: color }, style), className: "typography body-long-" + variant + " " + (bold ? "bold" : "") + " " + className }, { children: children }), void 0));
};
export default BodyLong;
//# sourceMappingURL=BodyLong.js.map