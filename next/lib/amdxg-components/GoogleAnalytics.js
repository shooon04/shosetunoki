"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function GoogleAnalytics(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GoogleAnalyticsTag, Object.assign({}, props))));
}
exports.GoogleAnalytics = GoogleAnalytics;
function GoogleAnalyticsTag(props) {
    const json = JSON.stringify({
        vars: {
            gtag_id: props.gtag,
            config: {
                [props.gtag]: { groups: "default" },
            },
        },
    });
    return (
    // @ts-ignore
    // prettier-ignore
    react_1.default.createElement("amp-analytics", { type: "gtag", "data-credentials": "include" },
        react_1.default.createElement("script", { type: "application/json", dangerouslySetInnerHTML: { __html: json } })));
}