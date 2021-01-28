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
import "./verticaltile.scss";
export var UpperContent = function (_a) {
    var label = _a.label;
    return _jsx("div", __assign({ className: "upper-content" }, { children: label }), void 0);
};
export default UpperContent;
//# sourceMappingURL=UpperContent.js.map