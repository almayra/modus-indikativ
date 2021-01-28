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
import "./sidebar.scss";
import { Document16 } from "@carbon/icons-react";
import BodyLong from "../Typography/BodyLong";
export var Menu = function (_a) {
    var label = _a.label, icon = _a.icon, children = _a.children;
    return (_jsx("li", { children: _jsxs("div", __assign({ className: "icon-wrapper" }, { children: [icon ? _jsx(Document16, { className: "icon" }, void 0) : null,
                _jsx(BodyLong, __assign({ variant: "01" }, { children: label }), void 0), children] }), void 0) }, void 0));
};
export default Menu;
//# sourceMappingURL=Menu.js.map