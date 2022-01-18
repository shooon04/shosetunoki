"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Link(props) {
    return (react_1.default.createElement("a", { className: "underline text-blue-700 hover:no-underline", href: props.href }, props.children));
}
exports.Link = Link;
