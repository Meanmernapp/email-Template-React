"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_plaid-verify-identity_tsx";
exports.ids = ["emails_plaid-verify-identity_tsx"];
exports.modules = {

/***/ "./emails/plaid-verify-identity.tsx":
/*!******************************************!*\
  !*** ./emails/plaid-verify-identity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlaidVerifyIdentityEmail\": () => (/* binding */ PlaidVerifyIdentityEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst PlaidVerifyIdentityEmail = ({ validationCode =\"144833\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                        style: container,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/plaid-logo.png`,\n                                width: \"212\",\n                                height: \"88\",\n                                alt: \"Plaid\",\n                                style: logo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: tertiary,\n                                children: \"Verify Your Identity\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                style: secondary,\n                                children: \"Enter the following code to finish linking Venmo.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                                style: codeContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                    style: code,\n                                    children: validationCode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"Not expecting this email?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Contact\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        href: \"mailto:login@plaid.com\",\n                                        style: link,\n                                        children: \"login@plaid.com\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    \" \",\n                                    \"if you did not request this code.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        style: footer,\n                        children: \"Securely powered by Plaid.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mohsin\\\\Desktop\\\\React-email\\\\react-mail-app\\\\react-email-starter\\\\.react-email\\\\emails\\\\plaid-verify-identity.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaidVerifyIdentityEmail);\nconst main = {\n    backgroundColor: \"#ffffff\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\"\n};\nconst container = {\n    backgroundColor: \"#ffffff\",\n    border: \"1px solid #eee\",\n    borderRadius: \"5px\",\n    boxShadow: \"0 5px 10px rgba(20,50,70,.2)\",\n    marginTop: \"20px\",\n    width: \"360px\",\n    margin: \"0 auto\",\n    padding: \"68px 0 130px\"\n};\nconst logo = {\n    margin: \"0 auto\"\n};\nconst tertiary = {\n    color: \"#0a85ea\",\n    fontSize: \"11px\",\n    fontWeight: 700,\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    height: \"16px\",\n    letterSpacing: \"0\",\n    lineHeight: \"16px\",\n    margin: \"16px 8px 8px 8px\",\n    textTransform: \"uppercase\",\n    textAlign: \"center\"\n};\nconst secondary = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Medium,Helvetica,Arial,sans-serif\",\n    fontSize: \"20px\",\n    fontWeight: 500,\n    lineHeight: \"24px\",\n    marginBottom: \"0\",\n    marginTop: \"0\",\n    textAlign: \"center\"\n};\nconst codeContainer = {\n    background: \"rgba(0,0,0,.05)\",\n    borderRadius: \"4px\",\n    margin: \"16px auto 14px\",\n    verticalAlign: \"middle\",\n    width: \"280px\"\n};\nconst code = {\n    color: \"#000\",\n    display: \"inline-block\",\n    fontFamily: \"HelveticaNeue-Bold\",\n    fontSize: \"32px\",\n    fontWeight: 700,\n    letterSpacing: \"6px\",\n    lineHeight: \"40px\",\n    paddingBottom: \"8px\",\n    paddingTop: \"8px\",\n    margin: \"0 auto\",\n    width: \"100%\",\n    textAlign: \"center\"\n};\nconst paragraph = {\n    color: \"#444\",\n    fontSize: \"15px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    padding: \"0 40px\",\n    margin: \"0\",\n    textAlign: \"center\"\n};\nconst link = {\n    color: \"#444\",\n    textDecoration: \"underline\"\n};\nconst footer = {\n    color: \"#000\",\n    fontSize: \"12px\",\n    fontWeight: 800,\n    letterSpacing: \"0\",\n    lineHeight: \"23px\",\n    margin: \"0\",\n    marginTop: \"20px\",\n    fontFamily: \"HelveticaNeue,Helvetica,Arial,sans-serif\",\n    textAlign: \"center\",\n    textTransform: \"uppercase\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvcGxhaWQtdmVyaWZ5LWlkZW50aXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVaUM7QUFDRjtBQUsvQixNQUFNVSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsR0FDbEMsQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsR0FDbkMsRUFBRTtBQUVDLE1BQU1DLDJCQUEyQixDQUFDLEVBQ3ZDQyxnQkFBaUIsU0FBUSxFQUNLLGlCQUM5Qiw4REFBQ1gseURBQUlBOzswQkFDSCw4REFBQ0YseURBQUlBOzs7OzswQkFDTCw4REFBQ0YseURBQUlBO2dCQUFDZ0IsT0FBT0M7O2tDQUNYLDhEQUFDaEIsOERBQVNBO3dCQUFDZSxPQUFPRTs7MENBQ2hCLDhEQUFDYix3REFBR0E7Z0NBQ0ZjLEtBQUssQ0FBQyxFQUFFVCxRQUFRLHNCQUFzQixDQUFDO2dDQUN2Q1UsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEMsS0FBSTtnQ0FDSk4sT0FBT087Ozs7OzswQ0FFVCw4REFBQ2YseURBQUlBO2dDQUFDUSxPQUFPUTswQ0FBVTs7Ozs7OzBDQUN2Qiw4REFBQ3JCLDREQUFPQTtnQ0FBQ2EsT0FBT1M7MENBQVc7Ozs7OzswQ0FHM0IsOERBQUNsQiw0REFBT0E7Z0NBQUNTLE9BQU9VOzBDQUNkLDRFQUFDbEIseURBQUlBO29DQUFDUSxPQUFPVzs4Q0FBT1o7Ozs7Ozs7Ozs7OzBDQUV0Qiw4REFBQ1AseURBQUlBO2dDQUFDUSxPQUFPWTswQ0FBVzs7Ozs7OzBDQUN4Qiw4REFBQ3BCLHlEQUFJQTtnQ0FBQ1EsT0FBT1k7O29DQUFXO29DQUNkO2tEQUNSLDhEQUFDdEIseURBQUlBO3dDQUFDdUIsTUFBSzt3Q0FBeUJiLE9BQU9jO2tEQUFNOzs7Ozs7b0NBRXpDO29DQUFJOzs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ3RCLHlEQUFJQTt3QkFBQ1EsT0FBT2U7a0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUd6QjtBQUVGLGlFQUFlakIsd0JBQXdCQSxFQUFDO0FBRXhDLE1BQU1HLE9BQU87SUFDWGUsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2Q7QUFFQSxNQUFNZixZQUFZO0lBQ2hCYyxpQkFBaUI7SUFDakJFLFFBQVE7SUFDUkMsY0FBYztJQUNkQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWGpCLE9BQU87SUFDUGtCLFFBQVE7SUFDUkMsU0FBUztBQUNYO0FBRUEsTUFBTWhCLE9BQU87SUFDWGUsUUFBUTtBQUNWO0FBRUEsTUFBTWQsV0FBVztJQUNmZ0IsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWlQsWUFBWTtJQUNaWixRQUFRO0lBQ1JzQixlQUFlO0lBQ2ZDLFlBQVk7SUFDWk4sUUFBUTtJQUNSTyxlQUFlO0lBQ2ZDLFdBQVc7QUFDYjtBQUVBLE1BQU1yQixZQUFZO0lBQ2hCZSxPQUFPO0lBQ1BPLFNBQVM7SUFDVGQsWUFBWTtJQUNaUSxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkUsWUFBWTtJQUNaSSxjQUFjO0lBQ2RYLFdBQVc7SUFDWFMsV0FBVztBQUNiO0FBRUEsTUFBTXBCLGdCQUFnQjtJQUNwQnVCLFlBQVk7SUFDWmQsY0FBYztJQUNkRyxRQUFRO0lBQ1JZLGVBQWU7SUFDZjlCLE9BQU87QUFDVDtBQUVBLE1BQU1PLE9BQU87SUFDWGEsT0FBTztJQUNQTyxTQUFTO0lBQ1RkLFlBQVk7SUFDWlEsVUFBVTtJQUNWQyxZQUFZO0lBQ1pDLGVBQWU7SUFDZkMsWUFBWTtJQUNaTyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWmQsUUFBUTtJQUNSbEIsT0FBTztJQUNQMEIsV0FBVztBQUNiO0FBRUEsTUFBTWxCLFlBQVk7SUFDaEJZLE9BQU87SUFDUEMsVUFBVTtJQUNWUixZQUFZO0lBQ1pVLGVBQWU7SUFDZkMsWUFBWTtJQUNaTCxTQUFTO0lBQ1RELFFBQVE7SUFDUlEsV0FBVztBQUNiO0FBRUEsTUFBTWhCLE9BQU87SUFDWFUsT0FBTztJQUNQYSxnQkFBZ0I7QUFDbEI7QUFFQSxNQUFNdEIsU0FBUztJQUNiUyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtJQUNaQyxlQUFlO0lBQ2ZDLFlBQVk7SUFDWk4sUUFBUTtJQUNSRCxXQUFXO0lBQ1hKLFlBQVk7SUFDWmEsV0FBVztJQUNYRCxlQUFlO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vZW1haWxzL3BsYWlkLXZlcmlmeS1pZGVudGl0eS50c3g/M2I0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb2R5LFxuICBDb250YWluZXIsXG4gIEhlYWQsXG4gIEhlYWRpbmcsXG4gIEh0bWwsXG4gIEltZyxcbiAgTGluayxcbiAgU2VjdGlvbixcbiAgVGV4dCxcbn0gZnJvbSAnQHJlYWN0LWVtYWlsL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIFBsYWlkVmVyaWZ5SWRlbnRpdHlFbWFpbFByb3BzIHtcbiAgdmFsaWRhdGlvbkNvZGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WRVJDRUxfVVJMXG4gID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcbiAgOiAnJztcblxuZXhwb3J0IGNvbnN0IFBsYWlkVmVyaWZ5SWRlbnRpdHlFbWFpbCA9ICh7XG4gIHZhbGlkYXRpb25Db2RlID0gJzE0NDgzMycsXG59OiBQbGFpZFZlcmlmeUlkZW50aXR5RW1haWxQcm9wcykgPT4gKFxuICA8SHRtbD5cbiAgICA8SGVhZCAvPlxuICAgIDxCb2R5IHN0eWxlPXttYWlufT5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxJbWdcbiAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9L3N0YXRpYy9wbGFpZC1sb2dvLnBuZ2B9XG4gICAgICAgICAgd2lkdGg9XCIyMTJcIlxuICAgICAgICAgIGhlaWdodD1cIjg4XCJcbiAgICAgICAgICBhbHQ9XCJQbGFpZFwiXG4gICAgICAgICAgc3R5bGU9e2xvZ299XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IHN0eWxlPXt0ZXJ0aWFyeX0+VmVyaWZ5IFlvdXIgSWRlbnRpdHk8L1RleHQ+XG4gICAgICAgIDxIZWFkaW5nIHN0eWxlPXtzZWNvbmRhcnl9PlxuICAgICAgICAgIEVudGVyIHRoZSBmb2xsb3dpbmcgY29kZSB0byBmaW5pc2ggbGlua2luZyBWZW5tby5cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8U2VjdGlvbiBzdHlsZT17Y29kZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e2NvZGV9Pnt2YWxpZGF0aW9uQ29kZX08L1RleHQ+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+Tm90IGV4cGVjdGluZyB0aGlzIGVtYWlsPzwvVGV4dD5cbiAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgQ29udGFjdHsnICd9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpsb2dpbkBwbGFpZC5jb21cIiBzdHlsZT17bGlua30+XG4gICAgICAgICAgICBsb2dpbkBwbGFpZC5jb21cbiAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICBpZiB5b3UgZGlkIG5vdCByZXF1ZXN0IHRoaXMgY29kZS5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VGV4dCBzdHlsZT17Zm9vdGVyfT5TZWN1cmVseSBwb3dlcmVkIGJ5IFBsYWlkLjwvVGV4dD5cbiAgICA8L0JvZHk+XG4gIDwvSHRtbD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWlkVmVyaWZ5SWRlbnRpdHlFbWFpbDtcblxuY29uc3QgbWFpbiA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgYm94U2hhZG93OiAnMCA1cHggMTBweCByZ2JhKDIwLDUwLDcwLC4yKScsXG4gIG1hcmdpblRvcDogJzIwcHgnLFxuICB3aWR0aDogJzM2MHB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgcGFkZGluZzogJzY4cHggMCAxMzBweCcsXG59O1xuXG5jb25zdCBsb2dvID0ge1xuICBtYXJnaW46ICcwIGF1dG8nLFxufTtcblxuY29uc3QgdGVydGlhcnkgPSB7XG4gIGNvbG9yOiAnIzBhODVlYScsXG4gIGZvbnRTaXplOiAnMTFweCcsXG4gIGZvbnRXZWlnaHQ6IDcwMCxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICBoZWlnaHQ6ICcxNnB4JyxcbiAgbGV0dGVyU3BhY2luZzogJzAnLFxuICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gIG1hcmdpbjogJzE2cHggOHB4IDhweCA4cHgnLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyBhcyBjb25zdCxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IHNlY29uZGFyeSA9IHtcbiAgY29sb3I6ICcjMDAwJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLU1lZGl1bSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMjBweCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBtYXJnaW5Cb3R0b206ICcwJyxcbiAgbWFyZ2luVG9wOiAnMCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXG59O1xuXG5jb25zdCBjb2RlQ29udGFpbmVyID0ge1xuICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwuMDUpJyxcbiAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgbWFyZ2luOiAnMTZweCBhdXRvIDE0cHgnLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgd2lkdGg6ICcyODBweCcsXG59O1xuXG5jb25zdCBjb2RlID0ge1xuICBjb2xvcjogJyMwMDAnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUtQm9sZCcsXG4gIGZvbnRTaXplOiAnMzJweCcsXG4gIGZvbnRXZWlnaHQ6IDcwMCxcbiAgbGV0dGVyU3BhY2luZzogJzZweCcsXG4gIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gIHBhZGRpbmdUb3A6ICc4cHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxufTtcblxuY29uc3QgcGFyYWdyYXBoID0ge1xuICBjb2xvcjogJyM0NDQnLFxuICBmb250U2l6ZTogJzE1cHgnLFxuICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gIGxldHRlclNwYWNpbmc6ICcwJyxcbiAgbGluZUhlaWdodDogJzIzcHgnLFxuICBwYWRkaW5nOiAnMCA0MHB4JyxcbiAgbWFyZ2luOiAnMCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicgYXMgY29uc3QsXG59O1xuXG5jb25zdCBsaW5rID0ge1xuICBjb2xvcjogJyM0NDQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG4gIGNvbG9yOiAnIzAwMCcsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGZvbnRXZWlnaHQ6IDgwMCxcbiAgbGV0dGVyU3BhY2luZzogJzAnLFxuICBsaW5lSGVpZ2h0OiAnMjNweCcsXG4gIG1hcmdpbjogJzAnLFxuICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgZm9udEZhbWlseTogJ0hlbHZldGljYU5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyBhcyBjb25zdCxcbn07XG4iXSwibmFtZXMiOlsiQm9keSIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkaW5nIiwiSHRtbCIsIkltZyIsIkxpbmsiLCJTZWN0aW9uIiwiVGV4dCIsIlJlYWN0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiUGxhaWRWZXJpZnlJZGVudGl0eUVtYWlsIiwidmFsaWRhdGlvbkNvZGUiLCJzdHlsZSIsIm1haW4iLCJjb250YWluZXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxvZ28iLCJ0ZXJ0aWFyeSIsInNlY29uZGFyeSIsImNvZGVDb250YWluZXIiLCJjb2RlIiwicGFyYWdyYXBoIiwiaHJlZiIsImxpbmsiLCJmb290ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwibWFyZ2luVG9wIiwibWFyZ2luIiwicGFkZGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmQiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./emails/plaid-verify-identity.tsx\n");

/***/ })

};
;