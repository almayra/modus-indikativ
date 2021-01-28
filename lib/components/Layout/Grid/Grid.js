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
import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./grid.module.scss";
import cn from "classnames";
export var Grid = function (_a) {
    var _b;
    var children = _a.children, container = _a.container, item = _a.item, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, spacing = _a.spacing, justifyContent = _a.justifyContent, alignItems = _a.alignItems, props = __rest(_a, ["children", "container", "item", "xs", "sm", "md", "lg", "spacing", "justifyContent", "alignItems"]);
    var classNames = cn((_b = {},
        _b[styles.Grid_container] = container,
        _b[styles.Grid_item] = item,
        _b[styles["Grid_xs_" + xs]] = xs,
        _b[styles["Grid_sm_" + sm]] = sm,
        _b[styles["Grid_md_" + md]] = md,
        _b[styles["Grid_lg_" + lg]] = lg,
        _b[styles["Grid_spacing_" + spacing]] = spacing,
        _b[styles["Grid_justifyContent_" + justifyContent]] = justifyContent,
        _b[styles["Grid_alignItems_" + alignItems]] = alignItems,
        _b));
    return (_jsx("div", __assign({ className: classNames }, props, { children: children }), void 0));
};
export default Grid;
//# sourceMappingURL=Grid.js.map