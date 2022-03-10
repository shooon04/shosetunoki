"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PageList_1 = require("./PageList");
function TagPage(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", {className: "post_list_title"}, props.tagName)),
            props.pages && react_1.default.createElement(PageList_1.PageList, { pages: props.pages }),
    ));
}
exports.TagPage = TagPage;
