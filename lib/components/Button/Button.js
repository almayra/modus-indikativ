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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./button.scss";
export var Button = function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? "medium" : _b, children = _a.children, append = _a.append, prepend = _a.prepend, split = _a.split, _c = _a.containerStyle, containerStyle = _c === void 0 ? {} : _c, props = __rest(_a, ["theme", "size", "children", "append", "prepend", "split", "containerStyle"]);
    return (_jsxs("button", __assign({ type: "button", className: [
            "component-btn",
            "component-btn-" + size,
            "component-btn-" + theme,
        ].join(" ") }, props, { style: containerStyle }, { children: [prepend ? (_jsx("span", __assign({ className: "component-btn-icon component-btn-icon-prepend " + (split ? "component-btn-icon-split" : "") }, { children: prepend }), void 0)) : null, children, append ? (_jsx("span", __assign({ className: "component-btn-icon component-btn-icon-append " + (split ? "component-btn-icon-split" : "") }, { children: append }), void 0)) : null] }), void 0));
};
Button.defaultProps = {
    state: "rest",
    backgroundColor: null,
    size: "medium",
    onClick: undefined,
};
export default Button;
//# sourceMappingURL=Button.js.map