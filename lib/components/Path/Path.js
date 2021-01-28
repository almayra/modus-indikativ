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
import "./path.scss";
export var Path = function (_a) {
    var stage = _a.stage, state = _a.state, right = _a.right, left = _a.left, children = _a.children;
    return (_jsxs("div", __assign({ className: "path " + state }, { children: [right ? _jsx("span", { className: "divider-after" }, void 0) : null,
            _jsx("div", __assign({ className: "" + stage }, { children: children }), void 0),
            left ? _jsx("span", { className: "divider-before" }, void 0) : null] }), void 0));
};
export default Path;
//# sourceMappingURL=Path.js.map