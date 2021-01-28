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
import styles from "./gridruler.module.scss";
import cn from "classnames";
export var GridRuler = function (_a) {
    var _b;
    var spacing = _a.spacing;
    var classNames = cn(styles.GridRuler, (_b = {},
        _b[styles["GridRuler_spacing_" + spacing]] = spacing,
        _b));
    return (_jsx("div", __assign({ className: classNames }, { children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (number) { return (_jsx("div", { className: styles.GridRuler_item }, number)); }) }), void 0));
};
export default GridRuler;
//# sourceMappingURL=GridRuler.js.map