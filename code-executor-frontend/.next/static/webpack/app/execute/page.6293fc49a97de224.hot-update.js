"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/execute/page",{

/***/ "(app-pages-browser)/./components/CodeEditor.tsx":
/*!***********************************!*\
  !*** ./components/CodeEditor.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ \"(app-pages-browser)/./node_modules/@monaco-editor/react/dist/index.mjs\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/api */ \"(app-pages-browser)/./lib/api.ts\");\n/* harmony import */ var _LanguageSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguageSelect */ \"(app-pages-browser)/./components/LanguageSelect.tsx\");\n/* harmony import */ var _barrel_optimize_names_RxResume_react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RxResume!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_VscCopilot_react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=VscCopilot!=!react-icons/vsc */ \"(app-pages-browser)/./node_modules/react-icons/vsc/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst defaultCode = {\n    python: \"print('Hello, World!')\",\n    javascript: \"console.log('Hello, World!');\",\n    go: 'package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    fmt.Println(\"Hello, World!\")\\n}'\n};\nconst CodeEditor = (param)=>{\n    let { folderId, folderName } = param;\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"python\");\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCode[language]);\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const monaco = (0,_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.useMonaco)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CodeEditor.useEffect\": ()=>{\n            setCode(defaultCode[language]); // Update code when language changes\n        }\n    }[\"CodeEditor.useEffect\"], [\n        language\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CodeEditor.useEffect\": ()=>{\n            if (!monaco) return;\n            monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({\n                noSemanticValidation: false,\n                noSyntaxValidation: false\n            });\n            monaco.languages.typescript.javascriptDefaults.setCompilerOptions({\n                target: monaco.languages.typescript.ScriptTarget.ESNext,\n                allowNonTsExtensions: true\n            });\n            monaco.languages.register({\n                id: \"python\"\n            });\n            monaco.languages.register({\n                id: \"go\"\n            });\n            const registerCompletions = {\n                \"CodeEditor.useEffect.registerCompletions\": (lang, suggestions)=>{\n                    monaco.languages.registerCompletionItemProvider(lang, {\n                        provideCompletionItems: {\n                            \"CodeEditor.useEffect.registerCompletions\": (model, position)=>{\n                                const word = model.getWordUntilPosition(position);\n                                const range = {\n                                    startLineNumber: position.lineNumber,\n                                    endLineNumber: position.lineNumber,\n                                    startColumn: word.startColumn,\n                                    endColumn: word.endColumn\n                                };\n                                return {\n                                    suggestions: suggestions.map({\n                                        \"CodeEditor.useEffect.registerCompletions\": (s)=>({\n                                                ...s,\n                                                range\n                                            })\n                                    }[\"CodeEditor.useEffect.registerCompletions\"])\n                                };\n                            }\n                        }[\"CodeEditor.useEffect.registerCompletions\"]\n                    });\n                }\n            }[\"CodeEditor.useEffect.registerCompletions\"];\n            registerCompletions(\"python\", [\n                {\n                    label: \"print\",\n                    kind: monaco.languages.CompletionItemKind.Function,\n                    insertText: \"print()\"\n                },\n                {\n                    label: \"for loop\",\n                    kind: monaco.languages.CompletionItemKind.Snippet,\n                    insertText: \"for i in range():\\n\\t\"\n                },\n                {\n                    label: \"while loop\",\n                    kind: monaco.languages.CompletionItemKind.Snippet,\n                    insertText: \"while condition:\\n\\t\"\n                },\n                {\n                    label: \"def function\",\n                    kind: monaco.languages.CompletionItemKind.Snippet,\n                    insertText: \"def function_name():\\n\\t\"\n                },\n                {\n                    label: \"len()\",\n                    kind: monaco.languages.CompletionItemKind.Function,\n                    insertText: \"len()\"\n                }\n            ]);\n            registerCompletions(\"go\", [\n                {\n                    label: \"fmt.Println\",\n                    kind: monaco.languages.CompletionItemKind.Function,\n                    insertText: \"fmt.Println()\"\n                },\n                {\n                    label: \"for loop\",\n                    kind: monaco.languages.CompletionItemKind.Snippet,\n                    insertText: \"for i := 0; i < n; i++ {\\n\\t\\n}\"\n                }\n            ]);\n        }\n    }[\"CodeEditor.useEffect\"], [\n        monaco\n    ]);\n    const handleRun = async ()=>{\n        const result = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.executeCode)(code, language);\n        setOutput(result);\n    };\n    const handleSuggest = async ()=>{\n        const aiSuggestion = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.getCodeSuggestion)(language, code);\n        setCode((prevCode)=>\"\".concat(prevCode, \"\\n\").concat(aiSuggestion));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[] mx-auto  mt-10 p-4 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageSelect__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                language: language,\n                setLanguage: (lang)=>setLanguage(lang)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 mt-1 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRun,\n                        className: \"flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-5 rounded-lg shadow-md transition duration-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxResume_react_icons_rx__WEBPACK_IMPORTED_MODULE_5__.RxResume, {\n                                className: \"text-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined),\n                            \" Run\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSuggest,\n                        className: \"flex items-center gap-2 cursor-pointer bg-black hover:bg-gray-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition duration-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscCopilot_react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscCopilot, {\n                                className: \"text-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, undefined),\n                            \" Code Copilot\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                height: \"500px\",\n                theme: \"vs-dark\",\n                language: language,\n                value: code,\n                onChange: (value)=>setCode(value || \"\"),\n                options: {\n                    fontSize: 14,\n                    suggest: {\n                        showWords: true,\n                        showFunctions: true,\n                        showVariables: true\n                    },\n                    quickSuggestions: true,\n                    parameterHints: {\n                        enabled: true\n                    },\n                    autoClosingBrackets: \"always\",\n                    autoClosingQuotes: \"always\",\n                    tabCompletion: \"on\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 p-2 bg-gray-800 rounded w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"Output\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        className: \"text-green-400 whitespace-pre-wrap break-words\",\n                        children: output || \"No output yet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\F3\\\\code-executor-frontend\\\\components\\\\CodeEditor.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CodeEditor, \"m+YHxuypcAJ+LPNC/OP9NgPHAV8=\", false, function() {\n    return [\n        _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__.useMonaco\n    ];\n});\n_c = CodeEditor;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeEditor);\nvar _c;\n$RefreshReg$(_c, \"CodeEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29kZUVkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTTtBQUNFO0FBQ2I7QUFDSjtBQUNHO0FBTzdDLE1BQU1VLGNBQWM7SUFDaEJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxJQUFLO0FBTVA7QUFJRixNQUFNQyxhQUFhO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQW1COztJQUN6RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFXO0lBQ25ELE1BQU0sQ0FBQ2tCLE1BQU1DLFFBQVEsR0FBR25CLCtDQUFRQSxDQUFTUyxXQUFXLENBQUNPLFNBQVM7SUFDOUQsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNc0IsU0FBU25CLCtEQUFTQTtJQUV4QkYsZ0RBQVNBO2dDQUFDO1lBQ05rQixRQUFRVixXQUFXLENBQUNPLFNBQVMsR0FBRyxvQ0FBb0M7UUFDeEU7K0JBQUc7UUFBQ0E7S0FBUztJQUViZixnREFBU0E7Z0NBQUM7WUFDTixJQUFJLENBQUNxQixRQUFRO1lBRWJBLE9BQU9DLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDQyxrQkFBa0IsQ0FBQ0MscUJBQXFCLENBQUM7Z0JBQ2pFQyxzQkFBc0I7Z0JBQ3RCQyxvQkFBb0I7WUFDeEI7WUFFQU4sT0FBT0MsU0FBUyxDQUFDQyxVQUFVLENBQUNDLGtCQUFrQixDQUFDSSxrQkFBa0IsQ0FBQztnQkFDOURDLFFBQVFSLE9BQU9DLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDTyxZQUFZLENBQUNDLE1BQU07Z0JBQ3ZEQyxzQkFBc0I7WUFDMUI7WUFFQVgsT0FBT0MsU0FBUyxDQUFDVyxRQUFRLENBQUM7Z0JBQUVDLElBQUk7WUFBUztZQUN6Q2IsT0FBT0MsU0FBUyxDQUFDVyxRQUFRLENBQUM7Z0JBQUVDLElBQUk7WUFBSztZQUVyQyxNQUFNQzs0REFBc0IsQ0FB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QUFTO29CQUFLO29CQUNoQ0MscUJBQXFCO29CQUNyQkMsbUJBQW1CO29CQUNuQkMsZUFBZTtnQkFDbkI7Ozs7OzswQkFJSiw4REFBQ25CO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ21CO3dCQUFHbkIsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDdEMsOERBQUNvQjt3QkFBSXBCLFdBQVU7a0NBQ1Y3QyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0F0SE1QOztRQUlhViwyREFBU0E7OztLQUp0QlU7QUF3SE4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3ViaGFcXERlc2t0b3BcXEYzXFxjb2RlLWV4ZWN1dG9yLWZyb250ZW5kXFxjb21wb25lbnRzXFxDb2RlRWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFZGl0b3IsIHsgdXNlTW9uYWNvIH0gZnJvbSBcIkBtb25hY28tZWRpdG9yL3JlYWN0XCI7XHJcbmltcG9ydCB7IGV4ZWN1dGVDb2RlLCBnZXRDb2RlU3VnZ2VzdGlvbiB9IGZyb20gJ0AvbGliL2FwaSc7XHJcbmltcG9ydCBMYW5ndWFnZVNlbGVjdCBmcm9tICcuL0xhbmd1YWdlU2VsZWN0JztcclxuaW1wb3J0IHsgUnhSZXN1bWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuaW1wb3J0IHsgVnNjQ29waWxvdCB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcclxuXHJcbnR5cGUgQ29kZUVkaXRvclByb3BzID0ge1xyXG4gICAgZm9sZGVySWQ/OiBudW1iZXI7IC8vIE9wdGlvbmFsOiBDYW4gYmUgdW5kZWZpbmVkIGlmIG5vIGZvbGRlciBpcyBzZWxlY3RlZFxyXG4gICAgZm9sZGVyTmFtZT86IHN0cmluZzsgLy8gQWRkZWQgZm9sZGVyIG5hbWUgZm9yIGJldHRlciBVSVxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdENvZGUgPSB7XHJcbiAgICBweXRob246IFwicHJpbnQoJ0hlbGxvLCBXb3JsZCEnKVwiLFxyXG4gICAgamF2YXNjcmlwdDogXCJjb25zb2xlLmxvZygnSGVsbG8sIFdvcmxkIScpO1wiLFxyXG4gICAgZ286IGBwYWNrYWdlIG1haW5cclxuXHJcbmltcG9ydCBcImZtdFwiXHJcblxyXG5mdW5jIG1haW4oKSB7XHJcbiAgICBmbXQuUHJpbnRsbihcIkhlbGxvLCBXb3JsZCFcIilcclxufWB9O1xyXG5cclxudHlwZSBMYW5ndWFnZSA9IGtleW9mIHR5cGVvZiBkZWZhdWx0Q29kZTtcclxuXHJcbmNvbnN0IENvZGVFZGl0b3IgPSAoeyBmb2xkZXJJZCwgZm9sZGVyTmFtZSB9OiBDb2RlRWRpdG9yUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KFwicHl0aG9uXCIpO1xyXG4gICAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nPihkZWZhdWx0Q29kZVtsYW5ndWFnZV0pO1xyXG4gICAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBtb25hY28gPSB1c2VNb25hY28oKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENvZGUoZGVmYXVsdENvZGVbbGFuZ3VhZ2VdKTsgLy8gVXBkYXRlIGNvZGUgd2hlbiBsYW5ndWFnZSBjaGFuZ2VzXHJcbiAgICB9LCBbbGFuZ3VhZ2VdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbW9uYWNvKSByZXR1cm47XHJcblxyXG4gICAgICAgIG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5qYXZhc2NyaXB0RGVmYXVsdHMuc2V0RGlhZ25vc3RpY3NPcHRpb25zKHtcclxuICAgICAgICAgICAgbm9TZW1hbnRpY1ZhbGlkYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBub1N5bnRheFZhbGlkYXRpb246IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuamF2YXNjcmlwdERlZmF1bHRzLnNldENvbXBpbGVyT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHRhcmdldDogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LlNjcmlwdFRhcmdldC5FU05leHQsXHJcbiAgICAgICAgICAgIGFsbG93Tm9uVHNFeHRlbnNpb25zOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyKHsgaWQ6IFwicHl0aG9uXCIgfSk7XHJcbiAgICAgICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3Rlcih7IGlkOiBcImdvXCIgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQ29tcGxldGlvbnMgPSAobGFuZzogc3RyaW5nLCBzdWdnZXN0aW9uczogYW55W10pID0+IHtcclxuICAgICAgICAgICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIobGFuZywge1xyXG4gICAgICAgICAgICAgICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogKG1vZGVsLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmQgPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogcG9zaXRpb24ubGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogcG9zaXRpb24ubGluZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHdvcmQuc3RhcnRDb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbHVtbjogd29yZC5lbmRDb2x1bW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMubWFwKHMgPT4gKHsgLi4ucywgcmFuZ2UgfSkpIH07XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZWdpc3RlckNvbXBsZXRpb25zKFwicHl0aG9uXCIsIFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJwcmludFwiLCBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbiwgaW5zZXJ0VGV4dDogXCJwcmludCgpXCIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJmb3IgbG9vcFwiLCBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0LCBpbnNlcnRUZXh0OiBcImZvciBpIGluIHJhbmdlKCk6XFxuXFx0XCIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJ3aGlsZSBsb29wXCIsIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQsIGluc2VydFRleHQ6IFwid2hpbGUgY29uZGl0aW9uOlxcblxcdFwiIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiZGVmIGZ1bmN0aW9uXCIsIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLlNuaXBwZXQsIGluc2VydFRleHQ6IFwiZGVmIGZ1bmN0aW9uX25hbWUoKTpcXG5cXHRcIiB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcImxlbigpXCIsIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uLCBpbnNlcnRUZXh0OiBcImxlbigpXCIgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmVnaXN0ZXJDb21wbGV0aW9ucyhcImdvXCIsIFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJmbXQuUHJpbnRsblwiLCBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbiwgaW5zZXJ0VGV4dDogXCJmbXQuUHJpbnRsbigpXCIgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJmb3IgbG9vcFwiLCBraW5kOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0LCBpbnNlcnRUZXh0OiBcImZvciBpIDo9IDA7IGkgPCBuOyBpKysge1xcblxcdFxcbn1cIiB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgIH0sIFttb25hY29dKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSdW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZUNvZGUoY29kZSwgbGFuZ3VhZ2UpO1xyXG4gICAgICAgIHNldE91dHB1dChyZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWdnZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFpU3VnZ2VzdGlvbiA9IGF3YWl0IGdldENvZGVTdWdnZXN0aW9uKGxhbmd1YWdlLCBjb2RlKTtcclxuICAgICAgICBzZXRDb2RlKHByZXZDb2RlID0+IGAke3ByZXZDb2RlfVxcbiR7YWlTdWdnZXN0aW9ufWApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bXSBteC1hdXRvICBtdC0xMCBwLTQgYmctZ3JheS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIHsvKiBGb2xkZXIgTmFtZSBEaXNwbGF5ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMYW5ndWFnZSBTZWxlY3RvciAqL31cclxuICAgICAgICAgICAgPExhbmd1YWdlU2VsZWN0IGxhbmd1YWdlPXtsYW5ndWFnZX0gc2V0TGFuZ3VhZ2U9eyhsYW5nKSA9PiBzZXRMYW5ndWFnZShsYW5nIGFzIFwicHl0aG9uXCIgfCBcImphdmFzY3JpcHRcIiB8IFwiZ29cIil9IC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQnV0dG9ucyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG10LTEgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJ1bn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHB5LTIgcHgtNSByb3VuZGVkLWxnIHNoYWRvdy1tZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJ4UmVzdW1lIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPiBSdW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWdnZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyIGJnLWJsYWNrIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcHktMiBweC01IHJvdW5kZWQtbGcgc2hhZG93LW1kIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VnNjQ29waWxvdCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCIgLz4gQ29kZSBDb3BpbG90XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQ29kZSBFZGl0b3IgKi99XHJcbiAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwMHB4XCJcclxuICAgICAgICAgICAgICAgIHRoZW1lPVwidnMtZGFya1wiXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldENvZGUodmFsdWUgfHwgXCJcIil9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IHsgc2hvd1dvcmRzOiB0cnVlLCBzaG93RnVuY3Rpb25zOiB0cnVlLCBzaG93VmFyaWFibGVzOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJIaW50czogeyBlbmFibGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NpbmdCcmFja2V0czogXCJhbHdheXNcIixcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2luZ1F1b3RlczogXCJhbHdheXNcIixcclxuICAgICAgICAgICAgICAgICAgICB0YWJDb21wbGV0aW9uOiBcIm9uXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIE91dHB1dCBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC0yIGJnLWdyYXktODAwIHJvdW5kZWQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+T3V0cHV0PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDAgd2hpdGVzcGFjZS1wcmUtd3JhcCBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvdXRwdXQgfHwgXCJObyBvdXRwdXQgeWV0XCJ9XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUVkaXRvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJFZGl0b3IiLCJ1c2VNb25hY28iLCJleGVjdXRlQ29kZSIsImdldENvZGVTdWdnZXN0aW9uIiwiTGFuZ3VhZ2VTZWxlY3QiLCJSeFJlc3VtZSIsIlZzY0NvcGlsb3QiLCJkZWZhdWx0Q29kZSIsInB5dGhvbiIsImphdmFzY3JpcHQiLCJnbyIsIkNvZGVFZGl0b3IiLCJmb2xkZXJJZCIsImZvbGRlck5hbWUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJtb25hY28iLCJsYW5ndWFnZXMiLCJ0eXBlc2NyaXB0IiwiamF2YXNjcmlwdERlZmF1bHRzIiwic2V0RGlhZ25vc3RpY3NPcHRpb25zIiwibm9TZW1hbnRpY1ZhbGlkYXRpb24iLCJub1N5bnRheFZhbGlkYXRpb24iLCJzZXRDb21waWxlck9wdGlvbnMiLCJ0YXJnZXQiLCJTY3JpcHRUYXJnZXQiLCJFU05leHQiLCJhbGxvd05vblRzRXh0ZW5zaW9ucyIsInJlZ2lzdGVyIiwiaWQiLCJyZWdpc3RlckNvbXBsZXRpb25zIiwibGFuZyIsInN1Z2dlc3Rpb25zIiwicmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyIiwicHJvdmlkZUNvbXBsZXRpb25JdGVtcyIsIm1vZGVsIiwicG9zaXRpb24iLCJ3b3JkIiwiZ2V0V29yZFVudGlsUG9zaXRpb24iLCJyYW5nZSIsInN0YXJ0TGluZU51bWJlciIsImxpbmVOdW1iZXIiLCJlbmRMaW5lTnVtYmVyIiwic3RhcnRDb2x1bW4iLCJlbmRDb2x1bW4iLCJtYXAiLCJzIiwibGFiZWwiLCJraW5kIiwiQ29tcGxldGlvbkl0ZW1LaW5kIiwiRnVuY3Rpb24iLCJpbnNlcnRUZXh0IiwiU25pcHBldCIsImhhbmRsZVJ1biIsInJlc3VsdCIsImhhbmRsZVN1Z2dlc3QiLCJhaVN1Z2dlc3Rpb24iLCJwcmV2Q29kZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoZWlnaHQiLCJ0aGVtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJvcHRpb25zIiwiZm9udFNpemUiLCJzdWdnZXN0Iiwic2hvd1dvcmRzIiwic2hvd0Z1bmN0aW9ucyIsInNob3dWYXJpYWJsZXMiLCJxdWlja1N1Z2dlc3Rpb25zIiwicGFyYW1ldGVySGludHMiLCJlbmFibGVkIiwiYXV0b0Nsb3NpbmdCcmFja2V0cyIsImF1dG9DbG9zaW5nUXVvdGVzIiwidGFiQ29tcGxldGlvbiIsImgzIiwicHJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CodeEditor.tsx\n"));

/***/ })

});