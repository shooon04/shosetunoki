"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ToC(props) {
    return (
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("nav", {className: "toc"},
                react_1.default.createElement("p", {className: "toc_title"}, "この記事の目次"),
                react_1.default.createElement("ol", null, props.toc.map((heading, index) => {
                    if(heading.depth != 2){return};
                    return (react_1.default.createElement("li", { className: heading.depth },
                        react_1.default.createElement("a", { href: `#${heading.id}` }, heading.title),
                        react_1.default.createElement(subToc, null, {toc: props.toc, index })
                    ));
                }))
            )
        )
    );
}
exports.ToC = ToC;

function subToc(props) {
    let breakFlg = 0;
    if(props.children.toc[props.children.index + 1] && props.children.toc[props.children.index + 1].depth == 2){
        return(react_1.default.createElement(react_1.default.Fragment, null))
    };
    return(
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("ul", null, props.children.toc.slice(props.children.index + 1).map((subHeading) => {
                if(subHeading.depth == 2 || breakFlg == 1){
                    breakFlg = 1;
                    return;
                };
                return (react_1.default.createElement("li", { className: subHeading.depth },
                    react_1.default.createElement("a", { href: `#${subHeading.id}` }, subHeading.title),
                ));
            }))
        )
    );
}
exports.subToc = subToc;
