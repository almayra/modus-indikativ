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
import BodyShort from "../Typography/BodyShort";
import "./select.scss";
import "../../assets/images/document.png";
export var Select = function (_a) {
    var children = _a.children, title = _a.title, type = _a.type, className = _a.className, containerStyle = _a.containerStyle, placeholder = _a.placeholder, props = __rest(_a, ["children", "title", "type", "className", "containerStyle", "placeholder"]);
    return (_jsxs("div", __assign({ className: "select-component" }, { children: [title ? _jsx(BodyShort, __assign({ variant: "01" }, { children: title }), void 0) : "",
            _jsxs("select", __assign({ style: containerStyle }, props, { className: type + " " + className }, { children: [placeholder ? (_jsx("option", __assign({ value: "", disabled: true, selected: true }, { children: placeholder }), void 0)) : null, children] }), void 0)] }), void 0));
};
export default Select;
//# sourceMappingURL=Select.js.map