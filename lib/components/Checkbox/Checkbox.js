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
import "./checkbox.scss";
export var Checkbox = function (_a) {
    var checked = _a.checked, _b = _a.theme, theme = _b === void 0 ? "monochrome" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, indeterminate = _a.indeterminate, label = _a.label, containerStyle = _a.containerStyle, className = _a.className;
    var renderCheckboxIcon = function () {
        if (indeterminate === true) {
            return "indeterminate " + size;
        }
        else {
            return "checkbox " + size;
        }
    };
    return (_jsxs("div", __assign({ className: "container-component " + theme + " " + className, style: __assign({}, containerStyle) }, { children: [_jsx("input", { type: "checkbox", checked: checked }, void 0),
            _jsx("span", { className: renderCheckboxIcon() }, void 0),
            label ? _jsx("div", __assign({ style: { marginLeft: 30 } }, { children: label }), void 0) : ""] }), void 0));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map