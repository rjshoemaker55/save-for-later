"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/brain";
exports.ids = ["pages/brain"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2ZS1mb3ItbGF0ZXIvLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGludGVyZmFjZSBHbG9iYWwge1xuICAgICAgcHJpc21hOiBhbnlcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/brain.tsx":
/*!*************************!*\
  !*** ./pages/brain.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rjshoemaker/Documents/code/projects/save-for-later/pages/brain.tsx\";\n\n\n\n\n\nconst getServerSideProps = async ({\n  req,\n  res\n}) => {\n  var _session$user;\n\n  console.log('in brain');\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n\n  if (!session) {\n    res.statusCode = 403;\n    return {\n      props: {\n        links: []\n      }\n    };\n  }\n\n  const links = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.default.link.findMany({\n    where: {\n      owner: {\n        email: (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email\n      }\n    },\n    include: {\n      owner: {\n        select: {\n          name: true\n        }\n      }\n    }\n  });\n  console.log(links);\n  return {\n    props: {\n      links\n    }\n  };\n};\n\nconst Brain = props => {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n\n  if (!session) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Not authenticated\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: props.links.map(link => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          children: link.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          children: link.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n          children: link.priority\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9icmFpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRU8sTUFBTUksa0JBQXNDLEdBQUcsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9DLEVBQUFBO0FBQVAsQ0FBUCxLQUF3QjtBQUFBOztBQUM1RUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNUCw0REFBVSxDQUFDO0FBQUVHLElBQUFBO0FBQUYsR0FBRCxDQUFoQzs7QUFDQSxNQUFJLENBQUNJLE9BQUwsRUFBYztBQUNaSCxJQUFBQSxHQUFHLENBQUNJLFVBQUosR0FBaUIsR0FBakI7QUFDQSxXQUFPO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFULEtBQVA7QUFDRDs7QUFFRCxRQUFNQSxLQUFLLEdBQUcsTUFBTVQsOERBQUEsQ0FBcUI7QUFDdkNZLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxtQkFBRVIsT0FBTyxDQUFDUyxJQUFWLGtEQUFFLGNBQWNEO0FBQXZCO0FBREYsS0FEZ0M7QUFJdkNFLElBQUFBLE9BQU8sRUFBRTtBQUNQSCxNQUFBQSxLQUFLLEVBQUU7QUFDTEksUUFBQUEsTUFBTSxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRTtBQUFSO0FBREg7QUFEQTtBQUo4QixHQUFyQixDQUFwQjtBQVdBZCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksS0FBWjtBQUVBLFNBQU87QUFDTEQsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFERixHQUFQO0FBR0QsQ0F4Qk07O0FBMEJQLE1BQU1VLEtBQXNCLEdBQUlYLEtBQUQsSUFBVztBQUN4QyxRQUFNLENBQUNGLE9BQUQsSUFBWVIsNERBQVUsRUFBNUI7O0FBRUEsTUFBSSxDQUFDUSxPQUFMLEVBQWM7QUFDWix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsY0FDR0UsS0FBSyxDQUFDQyxLQUFOLENBQVlXLEdBQVosQ0FBaUJWLElBQUQsSUFBZTtBQUM5QiwwQkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtBLElBQUksQ0FBQ1c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxvQkFBS1gsSUFBSSxDQUFDWTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLG9CQUFLWixJQUFJLENBQUNhO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBLHNCQURGO0FBT0QsS0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBcEJEOztBQXNCQSxpRUFBZUosS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhdmUtZm9yLWxhdGVyLy4vcGFnZXMvYnJhaW4udHN4PzFlZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hJ1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdpbiBicmFpbicpXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDAzXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgbGlua3M6IFtdIH0gfVxuICB9XG5cbiAgY29uc3QgbGlua3MgPSBhd2FpdCBwcmlzbWEubGluay5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIG93bmVyOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXI/LmVtYWlsIH1cbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc29sZS5sb2cobGlua3MpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBsaW5rcyB9XG4gIH1cbn1cblxuY29uc3QgQnJhaW46IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKClcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gPGgxPk5vdCBhdXRoZW50aWNhdGVkPC9oMT5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwcm9wcy5saW5rcy5tYXAoKGxpbms6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e2xpbmsudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMj57bGluay5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgPGgzPntsaW5rLnByaW9yaXR5fTwvaDM+XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyYWluXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInByaXNtYSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwic3RhdHVzQ29kZSIsInByb3BzIiwibGlua3MiLCJsaW5rIiwiZmluZE1hbnkiLCJ3aGVyZSIsIm93bmVyIiwiZW1haWwiLCJ1c2VyIiwiaW5jbHVkZSIsInNlbGVjdCIsIm5hbWUiLCJCcmFpbiIsIm1hcCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/brain.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/brain.tsx"));
module.exports = __webpack_exports__;

})();