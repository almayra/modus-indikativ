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
import "./chatroom.scss";
import ChatBottomText from "./ChatBottomText";
import BodyShort from "../Typography/BodyShort";
export var ChatRoom = function (_a) {
    var name = _a.name, time = _a.time, messageText = _a.messageText, prepend = _a.prepend, append = _a.append, img = _a.img, linkText = _a.linkText, _b = _a.sender, sender = _b === void 0 ? "inbound-chat" : _b;
    return (_jsxs("div", __assign({ className: "chat-room " + sender }, { children: [_jsxs("div", __assign({ className: "bubble" }, { children: [img ? (
                    // <div className={` ${img ? "with-image" : ""}`}>{img}</div>
                    _jsx("img", { alt: "foto", src: img, className: "with-image" }, void 0)) : null,
                    _jsxs("div", __assign({ className: "text-message" }, { children: [prepend ? _jsxs("span", __assign({ className: "icon prepend" }, { children: [prepend, " "] }), void 0) : "",
                            _jsx(BodyShort, __assign({ className: "text-message " + (linkText ? "link" : "") }, { children: messageText }), void 0),
                            append ? _jsx("span", __assign({ className: "icon append" }, { children: append }), void 0) : ""] }), void 0)] }), void 0),
            _jsxs(ChatBottomText, __assign({ className: "bottom-text" }, { children: [name, " \u2022 ", time] }), void 0)] }), void 0));
};
export default ChatRoom;
//# sourceMappingURL=ChatRoom.js.map