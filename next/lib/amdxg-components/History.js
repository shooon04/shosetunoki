"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function History(props) {
    return (react_1.default.createElement("details", null,
        react_1.default.createElement("summary", null, "History"),
        props.history.map((commit, index) => {
            return (react_1.default.createElement("div", { key: index },
                props.repository ? (react_1.default.createElement("a", { href: `https://github.com/${props.repository}/commit/${commit.hash}` },
                    commit.hash,
                    " - ",
                    commit.message)) : (react_1.default.createElement("span", null,
                    commit.hash,
                    " - ",
                    commit.message)),
                "\u00A0",
                commit.date,
                "\u00A0"));
        })));
}
exports.History = History;
