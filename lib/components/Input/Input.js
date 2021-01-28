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
import Label from "./Label";
import BottomText from "./BottomText";
import "./input.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup, } from "reactstrap";
export var CInput = function (_a) {
    var _b = _a.state, state = _b === void 0 ? "rest" : _b, inputText = _a.inputText, inputLabel = _a.inputLabel, bottomText = _a.bottomText, suffix = _a.suffix, preffix = _a.preffix, _c = _a.type, type = _c === void 0 ? "text" : _c;
    return (_jsxs(FormGroup, __assign({ className: "input-container input-state-" + state }, { children: [inputLabel ? _jsx(Label, { children: inputLabel }, void 0) : "",
            _jsxs(InputGroup, __assign({ size: "sm" }, { children: [preffix ? (_jsx(InputGroupAddon, __assign({ addonType: "prepend" }, { children: _jsx(InputGroupText, { children: preffix }, void 0) }), void 0)) : (""),
                    _jsx(Input, { placeholder: inputText, type: type, className: "input" }, void 0),
                    suffix ? (_jsx(InputGroupAddon, __assign({ addonType: "append" }, { children: _jsx(InputGroupText, { children: suffix }, void 0) }), void 0)) : ("")] }), void 0),
            bottomText ? (_jsx(BottomText, __assign({ className: "input-bottom-text" }, { children: bottomText }), void 0)) : ("")] }), void 0));
};
export default CInput;
//# sourceMappingURL=Input.js.map