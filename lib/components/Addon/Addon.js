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
import "./addon.scss";
import Label from "../Input/Label";
export var Addon = function (_a) {
    var label = _a.label, icon = _a.icon, container = _a.container, state = _a.state;
    var mode = container === true ? "-container" : "";
    return (_jsx("div", __assign({ className: "component-container " + state }, { children: _jsxs("span", __assign({ className: ["addon", mode].join("") }, { children: [icon ? icon : null, label ? _jsx(Label, { children: label }, void 0) : ""] }), void 0) }), void 0));
};
export default Addon;
Addon.defaultProps = {
    label: "Input Label",
    container: true,
};
//# sourceMappingURL=Addon.js.map