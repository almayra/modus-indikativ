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
import Heading from "../Typography/Heading";
import BodyLong from "../Typography/BodyLong";
import "./verticaltile.scss";
export var CardSection = function (_a) {
    var labelTitle = _a.labelTitle, supportingLabel = _a.supportingLabel, children = _a.children;
    return (_jsxs("div", __assign({ className: "card-section" }, { children: [_jsx(Heading, __assign({ variant: "03" }, { children: labelTitle }), void 0),
            _jsx(BodyLong, __assign({ variant: "01" }, { children: supportingLabel }), void 0),
            _jsx("div", __assign({ className: "badge-container" }, { children: children }), void 0)] }), void 0));
};
export default CardSection;
//# sourceMappingURL=CardSection.js.map