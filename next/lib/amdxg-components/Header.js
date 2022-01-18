"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Header(props) {
    return (react_1.default.createElement("nav", { className: "flex items-center justify-between flex-wrap bg-gray-800 p-3" },
        react_1.default.createElement("div", { className: "flex items-center flex-shrink-0 text-white mr-6" },
            react_1.default.createElement("a", { href: "/", className: "font-semibold text-xl tracking-tight text-gray-200" },
                "\u26A1",
                props.ssgConfig.siteName))));
}
exports.Header = Header;
