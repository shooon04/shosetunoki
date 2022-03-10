"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = require("./Link");
function PostList(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "post_list" }, props.related.map((page) => {
            return (react_1.default.createElement("article", { key: page.slug, className: "post_article" },
                react_1.default.createElement(Link_1.Link, { href: `/media/${page.slug}` }, 
                    react_1.default.createElement("img", {src: "/ogp/" + page.slug + ".png", width: "1100", height: "574", layout: "responsive"}),
                    react_1.default.createElement("p", null, page.title)
                )
            ));
        }))
    ));
}
exports.PostList = PostList;
