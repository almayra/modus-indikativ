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
import "./parentlist.scss";
import { Settings24, ChevronDown24 } from "@carbon/icons-react";
export var ParentList = function (_a) {
    var children = _a.children, settingIcon = _a.settingIcon, labelList = _a.labelList;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleParentList = function () {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", __assign({ className: "parent-list" }, { children: [_jsxs("div", __assign({ className: "dropdown-parent " + (isOpen ? "focus" : ""), onClick: toggleParentList }, { children: [_jsx("div", __assign({ className: "title" }, { children: labelList }), void 0),
                    _jsxs("div", __assign({ className: "wrapper" }, { children: [settingIcon ? (_jsx("div", __assign({ className: "icon" }, { children: _jsx(Settings24, {}, void 0) }), void 0)) : null,
                            _jsx("div", __assign({ className: "icon" }, { children: _jsx(ChevronDown24, {}, void 0) }), void 0)] }), void 0)] }), void 0),
            _jsx("ul", __assign({ className: "menu" }, { children: children }), void 0)] }), void 0));
};
export default ParentList;
//# sourceMappingURL=ParentList.js.map