webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./src/pages/about.tsx":
/*!*****************************!*\
  !*** ./src/pages/about.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./src/components/MyLayout.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      state = _useState[0],
      setstate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("http://localhost:8080/app2/task").then(function (res) {
      return setstate();
    });
  }, []);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx("div", {
    onClick: function onClick() {
      return setstate("I am in about page");
    }
  }, "Click me"), __jsx("div", null, state));
});

/***/ })

})
//# sourceMappingURL=about.js.89c68c12ba062957781f.hot-update.js.map