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
import EMPOFARM from "../../assets/images/empofarm.png";
import ODOO from "../../assets/images/odoo.png";
import AVATAR from "../../assets/images/avatar.png";
import { Select } from "../Select/Select";
import "./topbar.scss";
import Metadata from "../Typography/Metadata";
import { Help16, Notification16, Power16 } from "@carbon/icons-react";
import { Depth } from "../Depth/Depth";
export var TopBar = function () {
    return (_jsx(Depth, __assign({ depth: "16" }, { children: _jsxs("div", __assign({ className: "navbar-container" }, { children: [_jsxs("div", __assign({ className: "head" }, { children: [_jsx("img", { className: "logo", src: EMPOFARM, alt: "empofarm", height: 32 }, void 0),
                        _jsx("img", { className: "logo", src: ODOO, alt: "odoo", height: 24 }, void 0),
                        _jsx("div", { className: "divider" }, void 0),
                        _jsxs(Select, __assign({ containerStyle: { width: "fit-content", backgroundColor: "#fff" }, className: "select", type: "inline-select", placeholder: "User Role" }, { children: [_jsx("option", { children: "Super Admin" }, void 0),
                                _jsx("option", { children: "Finance Admin" }, void 0)] }), void 0)] }), void 0),
                _jsxs("div", __assign({ className: "tail" }, { children: [_jsx(Help16, {}, void 0),
                        _jsx("div", { className: "divider" }, void 0),
                        _jsx(Notification16, {}, void 0),
                        _jsx("div", { className: "divider" }, void 0),
                        _jsx(Power16, { className: "icon" }, void 0),
                        _jsxs("div", __assign({ className: "profile" }, { children: [_jsx(Metadata, __assign({ className: "text", variant: "02" }, { children: "Admin" }), void 0),
                                _jsx("div", { className: "divider" }, void 0),
                                _jsx(Metadata, __assign({ className: "text", variant: "02" }, { children: "Mahar Santara" }), void 0),
                                _jsx("img", { src: AVATAR, height: 33, alt: "avatar", style: { borderRadius: 20 } }, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default TopBar;
//# sourceMappingURL=TopBar.js.map