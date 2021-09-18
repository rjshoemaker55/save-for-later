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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rjshoemaker/Documents/code/projects/save-for-later/pages/brain.tsx\";\n\n\n\n\n\nconst getServerSideProps = async ({\n  req,\n  res\n}) => {\n  var _session$user;\n\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n\n  if (!session) {\n    res.statusCode = 403;\n    return {\n      props: {\n        links: []\n      }\n    };\n  }\n\n  const links = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.default.link.findMany({\n    where: {\n      owner: {\n        email: ((_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) || undefined\n      }\n    },\n    include: {\n      owner: {\n        select: {\n          name: true\n        }\n      }\n    }\n  });\n  console.log(links);\n  return {\n    props: {\n      links\n    }\n  };\n};\n\nconst Brain = props => {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n\n  if (!session) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Not authenticated\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: props.links.map(link => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n          children: link.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n          children: link.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n          children: link.priority\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9icmFpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRU8sTUFBTUksa0JBQXNDLEdBQUcsT0FBTztBQUFFQyxFQUFBQSxHQUFGO0FBQU9DLEVBQUFBO0FBQVAsQ0FBUCxLQUF3QjtBQUFBOztBQUM1RSxRQUFNQyxPQUFPLEdBQUcsTUFBTUwsNERBQVUsQ0FBQztBQUFFRyxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7O0FBQ0EsTUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDWkQsSUFBQUEsR0FBRyxDQUFDRSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsV0FBTztBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVCxLQUFQO0FBQ0Q7O0FBRUQsUUFBTUEsS0FBSyxHQUFHLE1BQU1QLDhEQUFBLENBQXFCO0FBQ3ZDVSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLEtBQUssRUFBRSxrQkFBQVIsT0FBTyxDQUFDUyxJQUFSLGdFQUFjRCxLQUFkLEtBQXVCRTtBQUFoQztBQURGLEtBRGdDO0FBSXZDQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEosTUFBQUEsS0FBSyxFQUFFO0FBQ0xLLFFBQUFBLE1BQU0sRUFBRTtBQUFFQyxVQUFBQSxJQUFJLEVBQUU7QUFBUjtBQURIO0FBREE7QUFKOEIsR0FBckIsQ0FBcEI7QUFXQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFFQSxTQUFPO0FBQ0xELElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBREYsR0FBUDtBQUdELENBdkJNOztBQTZCUCxNQUFNYSxLQUFzQixHQUFJZCxLQUFELElBQVc7QUFDeEMsUUFBTSxDQUFDRixPQUFELElBQVlOLDREQUFVLEVBQTVCOztBQUVBLE1BQUksQ0FBQ00sT0FBTCxFQUFjO0FBQ1osd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dFLEtBQUssQ0FBQ0MsS0FBTixDQUFZYyxHQUFaLENBQWlCYixJQUFELElBQWU7QUFDOUIsMEJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxJQUFJLENBQUNjO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0JBQUtkLElBQUksQ0FBQ2U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQSxvQkFBS2YsSUFBSSxDQUFDZ0I7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUEsc0JBREY7QUFPRCxLQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FwQkQ7O0FBc0JBLGlFQUFlSixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2ZS1mb3ItbGF0ZXIvLi9wYWdlcy9icmFpbi50c3g/MWVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uL2xpYi9wcmlzbWEnXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDNcbiAgICByZXR1cm4geyBwcm9wczogeyBsaW5rczogW10gfSB9XG4gIH1cblxuICBjb25zdCBsaW5rcyA9IGF3YWl0IHByaXNtYS5saW5rLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgb3duZXI6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfHwgdW5kZWZpbmVkIH1cbiAgICB9LFxuICAgIGluY2x1ZGU6IHtcbiAgICAgIG93bmVyOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc29sZS5sb2cobGlua3MpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBsaW5rcyB9XG4gIH1cbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgbGlua3M6IExpbmtQcm9wc1tdXG59XG5cbmNvbnN0IEJyYWluOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpXG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIDxoMT5Ob3QgYXV0aGVudGljYXRlZDwvaDE+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMubGlua3MubWFwKChsaW5rOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPntsaW5rLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aDI+e2xpbmsuZGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgIDxoMz57bGluay5wcmlvcml0eX08L2gzPlxuICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmFpblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2Vzc2lvbiIsImdldFNlc3Npb24iLCJwcmlzbWEiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwic3RhdHVzQ29kZSIsInByb3BzIiwibGlua3MiLCJsaW5rIiwiZmluZE1hbnkiLCJ3aGVyZSIsIm93bmVyIiwiZW1haWwiLCJ1c2VyIiwidW5kZWZpbmVkIiwiaW5jbHVkZSIsInNlbGVjdCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiQnJhaW4iLCJtYXAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/brain.tsx\n");

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