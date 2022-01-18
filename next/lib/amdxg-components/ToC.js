"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ToC(props) {
    return (
        react_1.default.createElement("ol", null, props.toc.map((heading) => {
            return (react_1.default.createElement("li", { key: heading.id },
                react_1.default.createElement("a", { href: `#${heading.id}` },
                    heading.title)));
        })));
}
exports.ToC = ToC;
