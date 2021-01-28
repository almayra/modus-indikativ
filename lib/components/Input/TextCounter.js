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
export var TextCounter = function (_a) {
    var _b = _a.length, length = _b === void 0 ? 0 : _b, _c = _a.maxLength, maxLength = _c === void 0 ? 0 : _c;
    var color = length === 0
        ? "text-counter-muted"
        : length >= maxLength
            ? "text-counter-danger"
            : "";
    return (_jsx("span", __assign({ className: "text-counter " + color }, { children: length + "/" + maxLength }), void 0));
};
export default TextCounter;
//# sourceMappingURL=TextCounter.js.map