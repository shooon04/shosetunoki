"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const nextLink_1 = __importDefault(require("next/link"));
function Link(props) {
    return (
        react_1.default.createElement(nextLink_1.default, { href: props.href },
            react_1.default.createElement("a", { href: props.href }, props.children)
        )
    );
}
exports.Link = Link;
