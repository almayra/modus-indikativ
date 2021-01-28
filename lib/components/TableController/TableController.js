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
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Settings32 } from "@carbon/icons-react";
import "./tablecontroller.scss";
export var TableController = function () {
    return (_jsxs("div", __assign({ className: "controller-container" }, { children: [_jsx(Searchbar, { width: "388px", placeholder: "Cari..." }, void 0),
            _jsxs("div", __assign({ className: "wrapper" }, { children: [_jsx(Checkbox, { containerStyle: { height: 24 }, theme: "monochrome", checked: false, label: "Menu", className: "item" }, void 0),
                    _jsx(Checkbox, { containerStyle: { height: 24 }, theme: "monochrome", checked: false, label: "Menu", className: "item" }, void 0),
                    _jsx(Checkbox, { containerStyle: { height: 24 }, theme: "monochrome", checked: true, label: "Menu", className: "item" }, void 0),
                    _jsx(Checkbox, { containerStyle: { height: 24 }, theme: "monochrome", checked: true, label: "Menu", className: "item" }, void 0),
                    _jsx(Checkbox, { containerStyle: { height: 24 }, theme: "monochrome", checked: true, label: "Menu", className: "item" }, void 0),
                    _jsx(Settings32, { className: "item" }, void 0)] }), void 0),
            _jsx(Button, __assign({ theme: "primary" }, { children: "Button Primary" }), void 0)] }), void 0));
};
export default TableController;
//# sourceMappingURL=TableController.js.map