"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const GoogleAnalytics_1 = require("./GoogleAnalytics");
function Layout(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DefaultPlugins, { config: props.config }),
        react_1.default.createElement(Header, { config: props.config }),
        react_1.default.createElement(Main, null, props.children),
        react_1.default.createElement(Footer, null)));
}
exports.Layout = Layout;
function DefaultPlugins(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AmpInstallServiceWorker, null),
        props.config.gtag && react_1.default.createElement(GoogleAnalytics_1.GoogleAnalytics, { gtag: props.config.gtag })));
}
exports.DefaultPlugins = DefaultPlugins;
function Main(props) {
    return (react_1.default.createElement(MainContainer, null,
        react_1.default.createElement(MainContent, null,
            react_1.default.createElement("main", { className: "article_page" }, props.children))));
}
exports.Main = Main;
function Header(props) {
    return (react_1.default.createElement("nav", { className: "flex items-center justify-between flex-wrap bg-gray-800 p-3" },
        react_1.default.createElement("div", { className: "flex items-center flex-shrink-0 text-white mr-6" },
            react_1.default.createElement("a", { href: "/", className: "font-semibold text-xl tracking-tight text-gray-200" },
                "\u26A1 ",
                props.config.siteName))));
}
exports.Header = Header;
function Footer() {
    return (react_1.default.createElement("footer", { className: "flex items-center justify-between flex-wrap bg-gray-800 p-6 text-gray-200" },
        react_1.default.createElement("p", null,
            "created by\u00A0",
            react_1.default.createElement("a", { href: "https://github.com/mizchi/amdx", className: "underline text-blue-400 hover:no-underline" }, "amdxg"),
            "\u00A0|\u00A0",
            react_1.default.createElement("span", null, "This site uses Google Analytics."))));
}
exports.Footer = Footer;
function AmpInstallServiceWorker(props) {
    const newProps = {
        src: "/sw.js",
        "data-iframe-src": "/install-sw.html",
        layout: "nodisplay",
        ...props,
    };
    return (
    // @ts-ignore
    react_1.default.createElement("amp-install-serviceworker", Object.assign({}, newProps)));
}
exports.AmpInstallServiceWorker = AmpInstallServiceWorker;
const MainContainer = styled_components_1.default.div `
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  max-width: 100%;
  background: #f7f6f5;
`;
const MainContent = styled_components_1.default.div `
  margin: 0 auto;
  max-width: 1140px;
  min-height: 80vh;
`;
