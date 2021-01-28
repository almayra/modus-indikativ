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
import "../../sass-modules/_depth.scss";
export var Depth = function (_a) {
    var depth = _a.depth, children = _a.children;
    return (_jsx("div", __assign({ className: "component-depth" }, { children: _jsx("div", __assign({ className: "component-depth-" + depth }, { children: children }), void 0) }), void 0));
};
export default Depth;
//# sourceMappingURL=Depth.js.map