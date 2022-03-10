"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = require("./Link");
function TagList(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", { className: "tag_list" },
                props.tags.map((tag, index) => {
                    return (
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(Link_1.Link, { className: "tag", href: "/media/tags/" + tag, key: index }, tag)
                        )
                    );
                }
            ),
        ),
    )));
}
exports.TagList = TagList;
