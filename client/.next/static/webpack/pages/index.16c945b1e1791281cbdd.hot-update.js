webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Timofey\\Desktop\\cupcake\\cupcake-frontend-test-task\\client\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var Index = function Index() {
  _s();

  var arr = [];
  var arr1 = {
    first: 0,
    second: 0,
    third: 0
  };
  var arr2 = {
    first: 0,
    second: 0,
    third: 0
  };

  function calc(market, curr1, curr2) {
    if (market.RUB || market.USD || market.EUR) {
      if (market === first) {
        arr1.first = (first.RUB / first.USD).toFixed(2);
        arr1.second = (second.RUB / second.USD).toFixed(2);
        arr1.third = (third.RUB / third.USD).toFixed(2);
      }

      if (market === second) {
        arr2.first = (first.RUB / first.EUR).toFixed(2);
        arr2.second = (second.RUB / second.EUR).toFixed(2);
        arr2.third = (third.RUB / third.EUR).toFixed(2);
      }

      var allvalues = Object.keys(arr1).map(function (key) {
        return arr1[key];
      }); // console.log(allvalues);

      var allvalues2 = Object.keys(arr2).map(function (key) {
        return arr2[key];
      }); // console.log(allvalues);
      // if (arr.length) {

      var inlineMin = Math.min.apply(null, allvalues);
      var inlineMin2 = Math.min.apply(null, allvalues2); // }

      if ((market[curr1] / market[curr2]).toFixed(2) == inlineMin) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, this);
      }

      if ((market[curr1] / market[curr2]).toFixed(2) == inlineMin2) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 16
        }, this);
      } // console.log('---------', (market[curr1] / market[curr2]).toFixed(2))


      return (market[curr1] / market[curr2]).toFixed(2);
    }
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  }),
      first = _useState[0],
      setFirst = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  }),
      second = _useState2[0],
      setSecond = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  }),
      third = _useState3[0],
      setThird = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      total = _useState4[0],
      setTotal = _useState4[1]; // arr.push(...first.RUB, first.RUB / first.USD);
  // arr.push(...second.RUB, second.RUB / second.USD);
  // arr.push(...third.RUB, third.RUB / third.USD);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/first').then(function (res) {
        return setFirst(res.data.rates);
      });
    }, 3000);
    return function () {
      clearTimeout(timeout);
    };
  }, [first]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/second').then(function (res) {
        return setSecond(res.data.rates);
      });
    }, 3000);
    return function () {
      clearTimeout(timeout);
    };
  }, [second]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/third').then(function (res) {
        return setThird(res.data.rates);
      });
    }, 3000);
    return function () {
      clearTimeout(timeout);
    };
  }, [third]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.respTab,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Pair name/market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, _this);
};

_s(Index, "1S/CTuPzzmGjF4/Bga3Yrqs8LgQ=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnIiLCJhcnIxIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImFycjIiLCJjYWxjIiwibWFya2V0IiwiY3VycjEiLCJjdXJyMiIsIlJVQiIsIlVTRCIsIkVVUiIsInRvRml4ZWQiLCJhbGx2YWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiYWxsdmFsdWVzMiIsImlubGluZU1pbiIsIk1hdGgiLCJtaW4iLCJhcHBseSIsImlubGluZU1pbjIiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInNldEZpcnN0Iiwic2V0U2Vjb25kIiwic2V0VGhpcmQiLCJ0b3RhbCIsInNldFRvdGFsIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmF0ZXMiLCJjbGVhclRpbWVvdXQiLCJ3cmFwcGVyIiwicmVzcFRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRSxDQURFO0FBRVRDLFVBQU0sRUFBRSxDQUZDO0FBR1RDLFNBQUssRUFBRTtBQUhFLEdBQVg7QUFNQSxNQUFJQyxJQUFJLEdBQUc7QUFDVEgsU0FBSyxFQUFFLENBREU7QUFFVEMsVUFBTSxFQUFFLENBRkM7QUFHVEMsU0FBSyxFQUFFO0FBSEUsR0FBWDs7QUFLQSxXQUFTRSxJQUFULENBQWNDLE1BQWQsRUFBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxRQUFJRixNQUFNLENBQUNHLEdBQVAsSUFBY0gsTUFBTSxDQUFDSSxHQUFyQixJQUE0QkosTUFBTSxDQUFDSyxHQUF2QyxFQUE0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S0FBUixFQUFlLEtBQWYsQ0FBSixJQUE2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkYsZUErQkU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUtFLElBQUksQ0FBQ0osS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosSUFBNkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsc0JBQUtJLElBQUksQ0FBQ0gsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsS0FBaEIsQ0FBSixJQUE4QjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBQSxzQkFBS0csSUFBSSxDQUFDRixLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FBSixJQUE2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0RELENBekpEOztHQUFNTCxLOztLQUFBQSxLO0FBMkpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNmM5NDViMWUxNzkxMjgxY2JkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgbGV0IGFyciA9IFtdO1xuICBsZXQgYXJyMSA9IHtcbiAgICBmaXJzdDogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgdGhpcmQ6IDAsXG4gIH1cblxuICBsZXQgYXJyMiA9IHtcbiAgICBmaXJzdDogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgdGhpcmQ6IDAsXG4gIH1cbiAgZnVuY3Rpb24gY2FsYyhtYXJrZXQsIGN1cnIxLCBjdXJyMikge1xuICAgIGlmIChtYXJrZXQuUlVCIHx8IG1hcmtldC5VU0QgfHwgbWFya2V0LkVVUikge1xuICAgICAgaWYgKG1hcmtldCA9PT0gZmlyc3QpIHtcblxuICAgICAgICBhcnIxLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKTtcbiAgICAgICAgYXJyMS5zZWNvbmQgPSAoc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICAgIGFycjEudGhpcmQgPSAodGhpcmQuUlVCIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgfVxuICAgICAgaWYgKG1hcmtldCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIGFycjIuZmlyc3QgPSAoZmlyc3QuUlVCIC8gZmlyc3QuRVVSKS50b0ZpeGVkKDIpO1xuICAgICAgICBhcnIyLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLkVVUikudG9GaXhlZCgyKTtcbiAgICAgICAgYXJyMi50aGlyZCA9ICh0aGlyZC5SVUIgLyB0aGlyZC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICB9XG5cblxuICAgICAgdmFyIGFsbHZhbHVlcyA9IE9iamVjdC5rZXlzKGFycjEpLm1hcChmdW5jdGlvbihrZXkpe3JldHVybiBhcnIxW2tleV07fSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGx2YWx1ZXMpO1xuICAgICAgdmFyIGFsbHZhbHVlczIgPSBPYmplY3Qua2V5cyhhcnIyKS5tYXAoZnVuY3Rpb24oa2V5KXtyZXR1cm4gYXJyMltrZXldO30pO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsdmFsdWVzKTtcblxuICAgICAgLy8gaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBpbmxpbmVNaW4gPSBNYXRoLm1pbi5hcHBseShudWxsLCBhbGx2YWx1ZXMpO1xuICAgICAgbGV0IGlubGluZU1pbjIgPSBNYXRoLm1pbi5hcHBseShudWxsLCBhbGx2YWx1ZXMyKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICgobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMikgPT0gaW5saW5lTWluKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICBpZiAoKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpID09IGlubGluZU1pbjIpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlufT57IChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKX0gPC9kaXY+IDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0nLCAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMikpXG5cbiAgICAgIHJldHVybiAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMik7XG4gICAgfVxuICB9XG4gIGxldCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgbGV0IFt0aGlyZCwgc2V0VGhpcmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcblxuICBsZXQgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGFyci5wdXNoKC4uLmZpcnN0LlJVQiwgZmlyc3QuUlVCIC8gZmlyc3QuVVNEKTtcbiAgLy8gYXJyLnB1c2goLi4uc2Vjb25kLlJVQiwgc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpO1xuICAvLyBhcnIucHVzaCguLi50aGlyZC5SVUIsIHRoaXJkLlJVQiAvIHRoaXJkLlVTRCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9maXJzdCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0Rmlyc3QocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtmaXJzdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9zZWNvbmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFNlY29uZChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3NlY29uZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS90aGlyZCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0VGhpcmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFt0aGlyZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5yZXNwVGFifT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5QYWlyIG5hbWUvbWFya2V0PC90aD5cbiAgICAgICAgICAgIDx0aD5GaXJzdDwvdGg+XG4gICAgICAgICAgICA8dGg+U2Vjb25kPC90aD5cbiAgICAgICAgICAgIDx0aD5UaGlyZDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvQ1VQQ0FLRSA8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5VU0QvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7c2Vjb25kLlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9DVVBDQUtFPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3NlY29uZC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0VVUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9VU0Q8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==