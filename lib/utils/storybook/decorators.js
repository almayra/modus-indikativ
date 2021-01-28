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
import { createElement } from "react";
import { addDecorator } from "@storybook/react";
import styles from "./decorators.scss";
export var centerDecorator = function (story) { return (_jsx("div", __assign({ className: styles.center }, { children: story() }), void 0)); };
/**
 * The following function was added to overcome a bug with Storyshot lib,
 * that didn't allow stories with react hooks
 * within them to load, the tests were created with errors.
 * Please see the following thread: https://github.com/storybookjs/storybook/issues/8177
 * Consider removing this line when the issue is fixed.
 */
addDecorator(createElement);
//# sourceMappingURL=decorators.js.map