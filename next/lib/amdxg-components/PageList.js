"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const format_1 = __importDefault(require("date-fns/format"));
function PageList(props) {
    return (react_1.default.createElement("div", null, props.pages.map((page, index) => {
        const formatted = format_1.default(page.created, "yyyy/MM/dd/HH:mm");
        return (react_1.default.createElement("div", { key: index },
            react_1.default.createElement("span", null, formatted),
            ": \u00A0",
            react_1.default.createElement("a", { className: "underline text-blue-700 hover:no-underline", href: "/" + page.slug }, page.title)));
    })));
}
exports.PageList = PageList;
