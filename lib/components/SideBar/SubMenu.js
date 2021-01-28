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
import { jsxs as _jsxs } from "react/jsx-runtime";
import "./sidebar.scss";
export var SubMenu = function (_a) {
    var label = _a.label, active = _a.active, children = _a.children;
    return (_jsxs("li", __assign({ className: "" + (active ? "active" : "") }, { children: [label, " ", children] }), void 0));
};
export default SubMenu;
//# sourceMappingURL=SubMenu.js.map