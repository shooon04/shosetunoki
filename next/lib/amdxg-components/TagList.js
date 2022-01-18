"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function TagList(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null, props.tags.map((tag, index) => {
        return (react_1.default.createElement("a", { className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2", href: "/tags/" + tag, key: index }, tag));
    })));
}
exports.TagList = TagList;
