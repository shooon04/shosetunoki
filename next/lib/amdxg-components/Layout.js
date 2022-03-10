"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Link_1 = require("./Link");
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
        react_1.default.createElement(AmpInstallServiceWorker, null)));
}
exports.DefaultPlugins = DefaultPlugins;
function Main(props) {
    return (react_1.default.createElement("div", { className: "main_wrap" },
        react_1.default.createElement(MainContent, null,
            react_1.default.createElement("main", { className: "article_page" }, props.children))));
}
exports.Main = Main;
function Header(props) {
    return (
        react_1.default.createElement("header", { className: "main_header" },
            react_1.default.createElement("nav", null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Link_1.Link, { href: "/" },
                        react_1.default.createElement("a", { href: "/", className: "header_logo" },
                            react_1.default.createElement("img", {src: "/logo.png", width: "35", height: "35"}),
                            react_1.default.createElement("span", null,
                                props.config.siteName
                            )
                        )
                    )
                )
            )
        )
    );
}
exports.Header = Header;
function Footer() {
    return (react_1.default.createElement("footer", { className: "main_footer" },
        react_1.default.createElement("p", null,
            react_1.default.createElement("span", { className: "copy"}, "© Copyright 2022 小説の木 All rights reserved."))));
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
const MainContent = styled_components_1.default.div `
  margin: 0 auto;
  max-width: 1140px;
  min-height: 80vh;
`;
