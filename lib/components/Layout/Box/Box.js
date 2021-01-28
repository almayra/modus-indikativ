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
import styles from "./box.module.scss";
export var Box = function (_a) {
    var children = _a.children;
    return _jsx("div", __assign({ className: styles.Box }, { children: children }), void 0);
};
export default Box;
//# sourceMappingURL=Box.js.map