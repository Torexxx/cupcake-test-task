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

  function calc(market, curr1, curr2) {
    if (market.RUB || market.USD || market.EUR) {
      if (market === first) {
        debugger;
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
          lineNumber: 37,
          columnNumber: 16
        }, this);
      }

      if ((market[curr1] / market[curr2]).toFixed(2) == inlineMin2) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
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
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
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
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
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
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
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
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnIiLCJhcnIxIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImNhbGMiLCJtYXJrZXQiLCJjdXJyMSIsImN1cnIyIiwiUlVCIiwiVVNEIiwiRVVSIiwidG9GaXhlZCIsImFycjIiLCJhbGx2YWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiYWxsdmFsdWVzMiIsImlubGluZU1pbiIsIk1hdGgiLCJtaW4iLCJhcHBseSIsImlubGluZU1pbjIiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInNldEZpcnN0Iiwic2V0U2Vjb25kIiwic2V0VGhpcmQiLCJ0b3RhbCIsInNldFRvdGFsIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmF0ZXMiLCJjbGVhclRpbWVvdXQiLCJ3cmFwcGVyIiwicmVzcFRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRSxDQURFO0FBRVRDLFVBQU0sRUFBRSxDQUZDO0FBR1RDLFNBQUssRUFBRTtBQUhFLEdBQVg7O0FBS0EsV0FBU0MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsUUFBSUYsTUFBTSxDQUFDRyxHQUFQLElBQWNILE1BQU0sQ0FBQ0ksR0FBckIsSUFBNEJKLE1BQU0sQ0FBQ0ssR0FBdkMsRUFBNEM7QUFDMUMsVUFBSUwsTUFBTSxLQUFLSixLQUFmLEVBQXNCO0FBQ3BCO0FBQ0FELFlBQUksQ0FBQ0MsS0FBTCxHQUFhLENBQUNBLEtBQUssQ0FBQ08sR0FB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LGlCQXpCRixlQStCRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0MsSUFBSSxDQUFDSCxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FBSixJQUE2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxzQkFBS0csSUFBSSxDQUFDRixNQUFELEVBQVMsS0FBVCxFQUFnQixLQUFoQixDQUFKLElBQThCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBLHNCQUFLRSxJQUFJLENBQUNELEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0FuSkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUFxSlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3YzhiNDJmM2UwZGQ5YTRjNzgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgYXJyID0gW107XG4gIGxldCBhcnIxID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfVxuICBmdW5jdGlvbiBjYWxjKG1hcmtldCwgY3VycjEsIGN1cnIyKSB7XG4gICAgaWYgKG1hcmtldC5SVUIgfHwgbWFya2V0LlVTRCB8fCBtYXJrZXQuRVVSKSB7XG4gICAgICBpZiAobWFya2V0ID09PSBmaXJzdCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBhcnIxLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKTtcbiAgICAgICAgYXJyMS5zZWNvbmQgPSAoc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICAgIGFycjEudGhpcmQgPSAodGhpcmQuUlVCIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgfVxuICAgICAgaWYgKG1hcmtldCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIGFycjIuZmlyc3QgPSAoZmlyc3QuUlVCIC8gZmlyc3QuRVVSKS50b0ZpeGVkKDIpO1xuICAgICAgICBhcnIyLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLkVVUikudG9GaXhlZCgyKTtcbiAgICAgICAgYXJyMi50aGlyZCA9ICh0aGlyZC5SVUIgLyB0aGlyZC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICB9XG5cblxuICAgICAgdmFyIGFsbHZhbHVlcyA9IE9iamVjdC5rZXlzKGFycjEpLm1hcChmdW5jdGlvbihrZXkpe3JldHVybiBhcnIxW2tleV07fSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhbGx2YWx1ZXMpO1xuICAgICAgdmFyIGFsbHZhbHVlczIgPSBPYmplY3Qua2V5cyhhcnIyKS5tYXAoZnVuY3Rpb24oa2V5KXtyZXR1cm4gYXJyMltrZXldO30pO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsdmFsdWVzKTtcblxuICAgICAgLy8gaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBpbmxpbmVNaW4gPSBNYXRoLm1pbi5hcHBseShudWxsLCBhbGx2YWx1ZXMpO1xuICAgICAgbGV0IGlubGluZU1pbjIgPSBNYXRoLm1pbi5hcHBseShudWxsLCBhbGx2YWx1ZXMyKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICgobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMikgPT0gaW5saW5lTWluKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICBpZiAoKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpID09IGlubGluZU1pbjIpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlufT57IChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKX0gPC9kaXY+IDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0nLCAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMikpXG5cbiAgICAgIHJldHVybiAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMik7XG4gICAgfVxuICB9XG4gIGxldCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgbGV0IFt0aGlyZCwgc2V0VGhpcmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcblxuICBsZXQgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGFyci5wdXNoKC4uLmZpcnN0LlJVQiwgZmlyc3QuUlVCIC8gZmlyc3QuVVNEKTtcbiAgLy8gYXJyLnB1c2goLi4uc2Vjb25kLlJVQiwgc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpO1xuICAvLyBhcnIucHVzaCguLi50aGlyZC5SVUIsIHRoaXJkLlJVQiAvIHRoaXJkLlVTRCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9maXJzdCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0Rmlyc3QocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtmaXJzdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9zZWNvbmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFNlY29uZChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3NlY29uZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS90aGlyZCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0VGhpcmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFt0aGlyZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5yZXNwVGFifT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5QYWlyIG5hbWUvbWFya2V0PC90aD5cbiAgICAgICAgICAgIDx0aD5GaXJzdDwvdGg+XG4gICAgICAgICAgICA8dGg+U2Vjb25kPC90aD5cbiAgICAgICAgICAgIDx0aD5UaGlyZDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvQ1VQQ0FLRSA8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5VU0QvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7c2Vjb25kLlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9DVVBDQUtFPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3NlY29uZC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0VVUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9VU0Q8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==