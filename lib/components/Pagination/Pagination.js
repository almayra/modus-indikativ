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
import { ChevronLeft16, ChevronRight16 } from "@carbon/icons-react";
import "./pagination.scss";
export var Pagination = function () {
    return (_jsxs("ul", __assign({ className: "pagination" }, { children: [_jsx("li", __assign({ className: "arrow" }, { children: _jsx("button", { children: _jsx(ChevronLeft16, {}, void 0) }, void 0) }), void 0),
            _jsx("li", __assign({ className: "number" }, { children: _jsx("button", { children: "1" }, void 0) }), void 0),
            _jsx("li", __assign({ className: "number" }, { children: _jsx("button", { children: "2" }, void 0) }), void 0),
            _jsx("li", __assign({ className: "number active" }, { children: _jsx("button", { children: "3" }, void 0) }), void 0),
            _jsx("li", __assign({ className: "number" }, { children: _jsx("button", { children: "4" }, void 0) }), void 0),
            _jsx("li", __assign({ className: "number" }, { children: _jsx("button", { children: "5" }, void 0) }), void 0),
            _jsx("li", __assign({ className: "arrow disabled" }, { children: _jsx("button", { children: _jsx(ChevronRight16, {}, void 0) }, void 0) }), void 0)] }), void 0));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map