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
import "./tab.scss";
import BodyShort from "../Typography/BodyShort";
export var Tab = function (_a) {
    var version = _a.version, status = _a.status, inputLabel = _a.inputLabel, icon = _a.icon;
    return (_jsxs("div", __assign({ className: "tab-item " + version + " " + status }, { children: [icon ? icon : null, _jsx(BodyShort, { children: inputLabel }, void 0)] }), void 0));
};
export default Tab;
//# sourceMappingURL=Tab.js.map