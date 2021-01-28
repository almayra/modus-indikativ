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
import "./dropdown.scss";
import { ChevronDown16, RadioButton16 } from "@carbon/icons-react";
import BodyShort from "../Typography/BodyShort";
export var Dropdown = function (_a) {
    var dropdownTitle = _a.dropdownTitle, prepend = _a.prepend, append = _a.append, dropdownLabel = _a.dropdownLabel, children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", __assign({ className: "dropdown" }, { children: [dropdownLabel ? (_jsx(BodyShort, __assign({ variant: "01" }, { children: dropdownLabel }), void 0)) : null,
            _jsxs("div", __assign({ className: "toggle" }, { children: [_jsxs("button", __assign({ className: "dropdown button " + (isOpen ? "focus" : ""), onClick: toggleDropdown }, { children: [prepend ? _jsx(RadioButton16, { className: "prepend" }, void 0) : null, dropdownTitle, append ? _jsx(ChevronDown16, { className: "append" }, void 0) : null] }), void 0),
                    _jsx("ul", __assign({ className: "menu" }, { children: children }), void 0)] }), void 0)] }), void 0));
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map