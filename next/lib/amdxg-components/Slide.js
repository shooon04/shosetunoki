"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const amdx = __importStar(require("amdx"));
const amdx_runner_1 = require("amdx-runner");
const vfile_1 = __importDefault(require("vfile"));
function Slide(props) {
    const file = vfile_1.default();
    file.contents = props.rawMdx;
    const parsed = amdx.parseFileToAst(file);
    parsed.childern = parsed.children.filter((node) => {
        return !["yaml", "import", "export"].includes(node.type);
    });
    const blocks = [];
    let breakCount = 0;
    for (const node of parsed.children) {
        if (node.type === "thematicBreak") {
            breakCount++;
        }
        else {
            if (blocks[breakCount] == null) {
                blocks[breakCount] = [node];
            }
            else {
                blocks[breakCount].push(node);
            }
        }
    }
    const documents = blocks.map((b) => {
        const hast = amdx.parseAstToHast({ type: "root", children: b });
        return amdx_runner_1.compile(hast, {
            components: {},
            h: react_1.default.createElement,
            Fragment: react_1.default.Fragment,
            props: {},
        });
    });
    return react_1.default.createElement(SlidePlayer, { documents: documents });
}
exports.Slide = Slide;
function SlidePlayer(props) {
    const [page, setPage] = react_1.useState(0);
    react_1.useEffect(() => {
        const onKeyDown = (ev) => {
            console.log(ev);
            if (ev.key === "ArrowRight") {
                if (page < props.documents.length - 1) {
                    setPage((n) => n + 1);
                }
            }
            if (ev.key === "ArrowLeft") {
                if (page > 0) {
                    setPage((n) => n - 1);
                }
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [page]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { disabled: page <= 0, onClick: () => setPage((n) => n - 1) }, "prev"),
            "|",
            react_1.default.createElement("button", { disabled: page >= props.documents.length - 1, onClick: () => setPage((n) => n + 1) }, "next"),
            "\u00A0",
            react_1.default.createElement("span", null,
                page + 1,
                "/",
                props.documents.length)),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { style: {
                width: "100%",
                height: "75vh",
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 5,
                overflow: "auto",
                fontSize: "2em",
                background: "#eee",
                outline: "1px solid #888",
            } },
            react_1.default.createElement("div", { className: "markdown-body" }, props.documents[page]))));
}
exports.SlidePlayer = SlidePlayer;
