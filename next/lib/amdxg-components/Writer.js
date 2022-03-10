"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));

function Writer(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", {className: "writer_box_title"}, "この記事のライター"),
        react_1.default.createElement("div", {className: "writer_box"},
            react_1.default.createElement("div", {className: "writer_box-img"}, 
                react_1.default.createElement("img", {src: "/writer-avatar/" + props.writer.avatar, width: "70", height: "70"}),
            ),
            react_1.default.createElement("div", {className: "writer_box-text"}, 
                react_1.default.createElement("span", {className: "writer_box-name"}, props.writer.name),
                react_1.default.createElement("p", {className: "writer_box-p"}, props.writer.text),
                react_1.default.createElement("a", {href: "https://twitter.com/" + props.writer.twitter, target: "_blank"},
                    react_1.default.createElement("i", {className: "fab fa-twitter"}, ""),"Twitter",
                ),
            ),
        props.children)
    ));
}
exports.Writer = Writer;
