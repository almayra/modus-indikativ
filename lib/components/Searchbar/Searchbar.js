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
import React from "react";
import { Search16, Close16 } from "@carbon/icons-react";
import "./searchbar.scss";
export var Searchbar = function (_a) {
    var _b = _a.searchQuery, searchQuery = _b === void 0 ? "" : _b, setSearchQuery = _a.setSearchQuery, placeholder = _a.placeholder, _c = _a.width, width = _c === void 0 ? "240px" : _c, _d = _a.containerStyle, containerStyle = _d === void 0 ? {} : _d, _e = _a.inputStyle, inputStyle = _e === void 0 ? {} : _e, _f = _a.className, className = _f === void 0 ? "" : _f;
    var _g = React.useState(false), searching = _g[0], setSearching = _g[1];
    var toggleSearching = function () { return setSearching(!searching); };
    return (_jsxs("div", __assign({ style: __assign({ width: width ? width : "100%" }, containerStyle), className: "searchbar " + className }, { children: [_jsx("div", __assign({ className: "icon icon-search " + (searching ? "hide" : "") }, { children: _jsx(Search16, {}, void 0) }), void 0),
            _jsx("input", { onBlur: toggleSearching, onFocus: toggleSearching, onChange: function (e) { return setSearchQuery(e.target.value); }, value: searchQuery, onKeyDown: function (e) {
                    if (e.key === "Enter")
                        return e.preventDefault();
                }, type: "text", placeholder: placeholder, style: __assign({}, inputStyle) }, void 0),
            _jsx("div", __assign({ onClick: function () { return setSearchQuery(""); }, className: "icon icon-clear " + (searchQuery.length ? "" : "hide") }, { children: _jsx(Close16, {}, void 0) }), void 0)] }), void 0));
};
export default Searchbar;
//# sourceMappingURL=Searchbar.js.map