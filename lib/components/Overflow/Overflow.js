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
import { useState } from "react";
import { OverflowMenuVertical16 } from "@carbon/icons-react";
import "./overflow.scss";
import { Depth } from "../Depth/Depth";
export var Overflow = function (_a) {
    var dark = _a.dark, children = _a.children, className = _a.className;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    return (_jsx("div", __assign({ className: "overflow" }, { children: _jsx(Depth, __assign({ depth: "4" }, { children: _jsxs("div", __assign({ className: "toggle" }, { children: [_jsx("button", __assign({ className: "overflow button " + (isOpen ? "focus" : "") + " " + className + " " + (dark ? "dark" : ""), onClick: toggleDropdown }, { children: _jsx(OverflowMenuVertical16, {}, void 0) }), void 0),
                    _jsx("ul", __assign({ className: "menu" }, { children: children }), void 0)] }), void 0) }), void 0) }), void 0));
};
export default Overflow;
//# sourceMappingURL=Overflow.js.map