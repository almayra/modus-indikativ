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
import BodyShort from "../Typography/BodyShort";
import "./dropdown.scss";
export var MenuItem = function (_a) {
    var children = _a.children;
    return (_jsx("li", __assign({ className: "menu-item" }, { children: _jsx(BodyShort, __assign({ variant: "01" }, { children: children }), void 0) }), void 0));
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map