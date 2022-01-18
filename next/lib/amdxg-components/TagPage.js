"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TagList_1 = require("./TagList");
const Link_1 = require("./Link");
function TagPage(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(TagList_1.TagList, { tags: [props.tagName] })),
        react_1.default.createElement("div", { style: { paddingTop: 10 } }, props.pages.map((page) => {
            return (react_1.default.createElement("div", { key: page.slug },
                react_1.default.createElement(Link_1.Link, { href: `/${page.slug}` }, page.title)));
        }))));
}
exports.TagPage = TagPage;
