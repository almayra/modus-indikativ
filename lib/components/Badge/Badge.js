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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import "./badge.scss";
export var Badge = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "gray" : _b, inputLabel = _a.inputLabel, icon = _a.icon, className = _a.className;
    return (_jsx("div", __assign({ className: "label-component label-" + color + " " + className }, { children: _jsxs("span", __assign({ className: ["label"].join("") }, { children: [icon ? icon : null, inputLabel] }), void 0) }), void 0));
};
Badge.defaultProps = {
    inputLabel: "Label",
};
export default Badge;
//# sourceMappingURL=Badge.js.map