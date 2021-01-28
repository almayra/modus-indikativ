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
import { Button } from "../Button/Button";
import "./modal.scss";
export var ModalFooter = function (_a) {
    var primaryLabel = _a.primaryLabel, secondaryLabel = _a.secondaryLabel;
    return (_jsxs("div", { children: [_jsx(Button, __assign({ containerStyle: { width: "50%" }, theme: "primary" }, { children: primaryLabel }), void 0),
            _jsx(Button, __assign({ containerStyle: { marginLeft: "-1px", width: "50%" }, theme: "secondary" }, { children: secondaryLabel }), void 0)] }, void 0));
};
export default ModalFooter;
//# sourceMappingURL=ModalFooter.js.map