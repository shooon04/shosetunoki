"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SocialShare(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { paddingTop: 15 } },
            props.twitter && react_1.default.createElement(TwitterShare, null),
            props.hatena && react_1.default.createElement(HatenaBookmarkShare, null),
            props.facebook && react_1.default.createElement(FacebookShare, null),
            props.line && react_1.default.createElement(LineShare, null))));
}
exports.SocialShare = SocialShare;
function TwitterShare() {
    // @ts-ignore
    return react_1.default.createElement("amp-social-share", { type: "twitter" });
}
function FacebookShare() {
    // @ts-ignore
    return react_1.default.createElement("amp-social-share", { type: "facebook" });
}
function LineShare() {
    // @ts-ignore
    return react_1.default.createElement("amp-social-share", { type: "line" });
}
function HatenaBookmarkShare() {
    return (
    // @ts-ignore
    // prettier-ignore
    // <amp-social-share type="hatena_bookmark" layout="container" data-share-endpoint="http://b.hatena.ne.jp/entry/CANONICAL_URL">B!</amp-social-share>
    react_1.default.createElement("amp-social-share", { type: "hatena_bookmark", "data-share-endpoint": "http://b.hatena.ne.jp/entry/CANONICAL_URL" }));
}
