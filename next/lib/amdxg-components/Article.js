"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ToC_1 = require("./ToC");
const History_1 = require("./History");
const SocialShare_1 = require("./SocialShare");
const TagList_1 = require("./TagList");
const format_1 = __importDefault(require("date-fns/format"));
function Article(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "article_wrap" },
            react_1.default.createElement("article", { className: "article_box" },
                react_1.default.createElement("div", { className: "markdown-body" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h1", null, props.title),
                        react_1.default.createElement("p", null,
                            props.tags && react_1.default.createElement(TagList_1.TagList, { tags: props.tags }),
                            "by",
                            " ",
                            react_1.default.createElement("a", { href: props.ssgConfig.authorLink }, props.ssgConfig.author),
                            "\u00A0",
                            props.createdAt && (react_1.default.createElement(react_1.default.Fragment, null,
                                "created at ",
                                format_1.default(props.createdAt, "yyyy/MM/dd/HH:mm"),
                                " ")))),
                    props.children,
                    react_1.default.createElement("div", { className: "py-4" }, props.history && (react_1.default.createElement(History_1.History, { repository: props.ssgConfig.repository, history: props.history })))),
                props.ssgConfig.socialShare && (react_1.default.createElement(SocialShare_1.SocialShare, Object.assign({}, props.ssgConfig.socialShare)))),
            react_1.default.createElement("aside", { className: "sdbar" },
                props.toc && react_1.default.createElement(ToC_1.ToC, { toc: props.toc })))));
}
exports.Article = Article;
