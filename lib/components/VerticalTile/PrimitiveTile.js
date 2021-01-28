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
import "./verticaltile.scss";
export var PrimitiveTile = function (_a) {
    var imageSource = _a.imageSource, children = _a.children;
    return (_jsxs("div", __assign({ className: "primitive-tile" }, { children: [_jsx("img", { alt: "foto", src: imageSource, className: "image" }, void 0), children] }), void 0));
};
export default PrimitiveTile;
//# sourceMappingURL=PrimitiveTile.js.map