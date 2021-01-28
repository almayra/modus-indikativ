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
import "./breadcrumb.scss";
export var Breadcrumb = function (_a) {
    var inputLabel = _a.inputLabel;
    return (_jsx("div", { children: _jsxs("ul", __assign({ className: "breadcrumbs" }, { children: [_jsx("li", __assign({ className: "breadcrumbs-item" }, { children: _jsx("a", __assign({ href: "/", className: "breadcrumbs-links" }, { children: inputLabel }), void 0) }), void 0),
                _jsx("li", __assign({ className: "breadcrumbs-item" }, { children: _jsx("a", __assign({ href: "/", className: "breadcrumbs-links" }, { children: inputLabel }), void 0) }), void 0),
                _jsx("li", __assign({ className: "breadcrumbs-item" }, { children: _jsx("a", __assign({ href: "/", className: "breadcrumbs-links" }, { children: inputLabel }), void 0) }), void 0),
                _jsx("li", __assign({ className: "breadcrumbs-item" }, { children: _jsx("a", __assign({ href: "/", className: "breadcrumbs-links-active" }, { children: inputLabel }), void 0) }), void 0)] }), void 0) }, void 0));
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map