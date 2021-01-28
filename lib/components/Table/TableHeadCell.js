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
import "./table.scss";
export var TableHeadCell = function (_a) {
    var children = _a.children, colSpan = _a.colSpan, accent = _a.accent, prepend = _a.prepend, append = _a.append, props = __rest(_a, ["children", "colSpan", "accent", "prepend", "append"]);
    return (_jsxs("th", __assign({ className: "" + (accent ? "accent" : null) }, props, { colSpan: colSpan }, { children: [prepend ? _jsx("span", __assign({ className: "icon prepend" }, { children: prepend }), void 0) : null, children, append ? _jsx("span", __assign({ className: "icon append" }, { children: append }), void 0) : null] }), void 0));
};
export default TableHeadCell;
//# sourceMappingURL=TableHeadCell.js.map