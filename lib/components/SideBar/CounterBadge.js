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
import Metadata from "../Typography/Metadata";
import "./sidebar.scss";
export var CounterBadge = function (_a) {
    var counter = _a.counter;
    return (_jsx("div", __assign({ className: "counter-badge" }, { children: _jsx(Metadata, __assign({ className: "text-counter", variant: "01" }, { children: counter }), void 0) }), void 0));
};
export default CounterBadge;
//# sourceMappingURL=CounterBadge.js.map