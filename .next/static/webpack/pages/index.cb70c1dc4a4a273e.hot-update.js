"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/FloatingButton */ \"./components/FloatingButton.tsx\");\n/* harmony import */ var _components_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/line */ \"./components/line.tsx\");\n/* harmony import */ var _lib_client_isPrivateFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/client/isPrivateFn */ \"./lib/client/isPrivateFn.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Index() {\n    var _this = this;\n    var ref1;\n    _s();\n    /*\n  이 코드는 넘어갔을 시 더보기를 표시하기 위해 작성한 chatgpt의 코드입니다(일부 수정) \n  const divRef = useRef(null);\n  const pRef = useRef(null);\n\n  const [newHtml, setNewHtml] = useState<any | null | undefined>(\"\");\n  const [isContentOverflow, setIsContentOverflow] = useState(false);\n  useEffect(() => {\n    const textElement = divRef?.current as any;\n    const maxHeight = textElement?.clientHeight;\n    const isContentOverflowing = textElement?.scrollHeight > maxHeight;\n    setIsContentOverflow(isContentOverflowing);\n    removeLastLine(pRef);\n  }, []);\n  const removeLastLine = (html: any) => {\n    if (typeof html === \"string\") {\n      const lines = html?.split(\"<br />\"); // 줄을 <br> 태그에 따라 분리\n      lines.pop(); // 배열의 마지막 요소를 제거\n      const newHTMLConst = lines.join(\"<br />\"); // 줄 배열을 원래 문자열로 다시 결합\n      setNewHtml(newHTMLConst);\n      if (pRef.current) {\n        pRef.current.innerHTML = newHTML;\n      }\n    }\n  }; */ var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,_lib_client_isPrivateFn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(true);\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"/api/tweet\").data;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {}, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full flex flex-col justify-center \",\n        style: {\n            overflowX: \"hidden\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl font-bold mt-12\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-[100vw] justify-center\",\n                style: {\n                    overflowX: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 w-[34rem]\",\n                        children: data === null || data === void 0 ? void 0 : (ref1 = data.tweets) === null || ref1 === void 0 ? void 0 : ref1.map(function(tweet) {\n                            var ref;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                id: tweet.id,\n                                href: \"/tweet/\".concat(tweet === null || tweet === void 0 ? void 0 : tweet.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" transition-all cursor-pointer flex flex-col h-64 border border-gray-800 hover:border-blue-300 rounded-lg items-stretch overflow-hidden\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-3 ml-3 flex items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"rounded-full bg-gray-200 w-12 h-12 \"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-xl font-medium ml-4 mt-2\",\n                                                    children: tweet === null || tweet === void 0 ? void 0 : (ref = tweet.user) === null || ref === void 0 ? void 0 : ref.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"m-4\",\n                                            children: tweet.tweet\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-white w-full h-5 bottom-0 absolute \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/tweet/create\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"h-6 w-6\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            \"aria-hidden\": \"true\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M12 6v6m0 0v6m0-6h6m-6 0H6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ghang\\\\nextJS\\\\carrot-market-FINAL(1)\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Index, \"kEs0F9Cbo5d4iJsz1AhgUX/pB90=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0NBQ3RCQyxXQUFXLEVBQUMsR0FBRztnQ0FDZkMsQ0FBQyxFQUFDLDRCQUE0Qjs7Ozs7b0NBQzlCOzs7OztnQ0FDRTs7Ozs7NEJBQ1M7Ozs7OztvQkFDYjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBL0V1QjNCLEtBQUs7O1FBMEJaSixrREFBUztRQUVQRywyQ0FBTTs7O0FBNUJEQyxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG9hdGluZ0J1dHRvbiBmcm9tIFwiQGNvbXBvbmVudHMvRmxvYXRpbmdCdXR0b25cIjtcbmltcG9ydCBMaW5lIGZyb20gXCJAY29tcG9uZW50cy9saW5lXCI7XG5pbXBvcnQgaXNQcml2YXRlRm4gZnJvbSBcIkBsaWIvY2xpZW50L2lzUHJpdmF0ZUZuXCI7XG5pbXBvcnQgaXNQcml2YXRlSW50ZXJmYWNlIGZyb20gXCJAbGliL2NsaWVudC9pc1ByaXZhdGVJbnRlcmZhY2VcIjtcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiQGxpYi9jbGllbnQvdXNlTXV0YXRpb25cIjtcbmltcG9ydCB7IFR3ZWV0LCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbnRlcmZhY2UgRXh0ZW5kZWRUd2VldCBleHRlbmRzIFR3ZWV0IHtcbiAgdXNlcjogVXNlcjtcbn1cblxuaW50ZXJmYWNlIHR3ZWV0UmVzcG9uc2Uge1xuICBvazogYm9vbGVhbjtcbiAgdHdlZXRzOiBFeHRlbmRlZFR3ZWV0W107XG4gIHVzZXI6IFVzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICAvKlxuICDsnbQg7L2U65Oc64qUIOuEmOyWtOqwlOydhCDsi5wg642U67O06riw66W8IO2RnOyLnO2VmOq4sCDsnITtlbQg7J6R7ISx7ZWcIGNoYXRncHTsnZgg7L2U65Oc7J6F64uI64ukKOydvOu2gCDsiJjsoJUpIFxuICBjb25zdCBkaXZSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW25ld0h0bWwsIHNldE5ld0h0bWxdID0gdXNlU3RhdGU8YW55IHwgbnVsbCB8IHVuZGVmaW5lZD4oXCJcIik7XG4gIGNvbnN0IFtpc0NvbnRlbnRPdmVyZmxvdywgc2V0SXNDb250ZW50T3ZlcmZsb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZGl2UmVmPy5jdXJyZW50IGFzIGFueTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0ZXh0RWxlbWVudD8uY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGlzQ29udGVudE92ZXJmbG93aW5nID0gdGV4dEVsZW1lbnQ/LnNjcm9sbEhlaWdodCA+IG1heEhlaWdodDtcbiAgICBzZXRJc0NvbnRlbnRPdmVyZmxvdyhpc0NvbnRlbnRPdmVyZmxvd2luZyk7XG4gICAgcmVtb3ZlTGFzdExpbmUocFJlZik7XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVtb3ZlTGFzdExpbmUgPSAoaHRtbDogYW55KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBodG1sID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGh0bWw/LnNwbGl0KFwiPGJyIC8+XCIpOyAvLyDspITsnYQgPGJyPiDtg5zqt7jsl5Ag65Sw6528IOu2hOumrFxuICAgICAgbGluZXMucG9wKCk7IC8vIOuwsOyXtOydmCDrp4jsp4Drp4kg7JqU7IaM66W8IOygnOqxsFxuICAgICAgY29uc3QgbmV3SFRNTENvbnN0ID0gbGluZXMuam9pbihcIjxiciAvPlwiKTsgLy8g7KSEIOuwsOyXtOydhCDsm5Drnpgg66y47J6Q7Je066GcIOuLpOyLnCDqsrDtlalcbiAgICAgIHNldE5ld0h0bWwobmV3SFRNTENvbnN0KTtcbiAgICAgIGlmIChwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcFJlZi5jdXJyZW50LmlubmVySFRNTCA9IG5ld0hUTUw7XG4gICAgICB9XG4gICAgfVxuICB9OyAqL1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaXNQcml2YXRlRm4odHJ1ZSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSPHR3ZWV0UmVzcG9uc2U+KFwiL2FwaS90d2VldFwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbZGF0YV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBcIlxuICAgICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImhpZGRlblwiIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCBtdC0xMlwiPkhvbWU8L2gxPlxuICAgICAgICA8TGluZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1bMTAwdnddIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3dYOiBcImhpZGRlblwiIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCB3LVszNHJlbV1cIj5cbiAgICAgICAgICB7ZGF0YT8udHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgICA8TGluayBpZD17dHdlZXQuaWR9IGhyZWY9e2AvdHdlZXQvJHt0d2VldD8uaWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGZsZXggZmxleC1jb2wgaC02NCBib3JkZXIgYm9yZGVyLWdyYXktODAwIGhvdmVyOmJvcmRlci1ibHVlLTMwMCByb3VuZGVkLWxnIGl0ZW1zLXN0cmV0Y2ggb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIG1sLTMgZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgdy0xMiBoLTEyIFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBtbC00IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3R3ZWV0Py51c2VyPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTRcIj57dHdlZXQudHdlZXR9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGgtNSBib3R0b20tMCBhYnNvbHV0ZSBcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGbG9hdGluZ0J1dHRvbiBocmVmPVwiL3R3ZWV0L2NyZWF0ZVwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBkPVwiTTEyIDZ2Nm0wIDB2Nm0wLTZoNm0tNiAwSDZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9GbG9hdGluZ0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZsb2F0aW5nQnV0dG9uIiwiTGluZSIsImlzUHJpdmF0ZUZuIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwiSW5kZXgiLCJkYXRhIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvdmVyZmxvd1giLCJoMSIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaWQiLCJocmVmIiwiaDMiLCJ1c2VyIiwibmFtZSIsInAiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});