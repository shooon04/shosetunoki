"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ToC_1 = require("./ToC");
const Writer_1 = require("./Writer");
const SocialShare_1 = require("./SocialShare");
const TagList_1 = require("./TagList");
const PageList_1 = require("./PageList");
function Article(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "article_wrap" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("article", { className: "article_box" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("header", null,
                            react_1.default.createElement("h1", null, props.title),
                            react_1.default.createElement("div", null,
                                props.tags && react_1.default.createElement(TagList_1.TagList, { tags: props.tags }),
                                react_1.default.createElement("time", { className: "article_time", itemprop: "dateModified", datetime: props.createdAt },
                                    react_1.default.createElement("i", {className: "fa-regular fa-calendar"}, ""),
                                    props.createdAt
                                )
                            )
                        ),
                        react_1.default.createElement('div', {className: "thumbnail_wrap"},
                            react_1.default.createElement("img", {src: "/ogp/" + props.slug + ".png", width: "1100", height: "574", layout: "responsive"}),
                        ),
                        react_1.default.createElement('div', {dangerouslySetInnerHTML: {__html: props.lead}}),
                        react_1.default.createElement(Writer_1.Writer, { writer: props.writer }),
                        props.toc && react_1.default.createElement(ToC_1.ToC, { toc: props.toc }),
                        props.children,
                        react_1.default.createElement("footer", null,
                            props.ssgConfig.socialShare && (react_1.default.createElement(SocialShare_1.SocialShare, Object.assign({}, props.ssgConfig.socialShare))),
                        ),
                    ),
                ),
                react_1.default.createElement("h2", {className: "post_list_title"}, "関連記事"),
                react_1.default.createElement(PageList_1.PageList, { pages: props.related })
            ),
            react_1.default.createElement("aside", { className: "sdbar" },
                props.related && react_1.default.createElement(PageList_1.PageList, { pages: props.related }),
                react_1.default.createElement("div", { className: "sdbar-toc" },
                    props.toc && react_1.default.createElement(ToC_1.ToC, { toc: props.toc })
                ),
            ))));
}
exports.Article = Article;
