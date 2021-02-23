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
      if (arr.length >= 3) {
        arr = [];
      } else {
        arr1.first = (first.RUB / first.USD).toFixed(2);
        arr1.second = (second.RUB / second.USD).toFixed(2);
        arr1.third = (third.RUB / third.USD).toFixed(2); // arr.push((first.RUB / first.USD).toFixed(2))
        // arr.push((second.RUB / second.USD).toFixed(2))
        // arr.push((third.RUB / third.USD).toFixed(2))

        var allvalues = Object.keys(arr1).map(function (key) {
          return arr1[key];
        });
        console.log(allvalues);
      } // if (arr.length) {


      var inlineMin = Math.min.apply(null, allvalues); // }

      if ((market[curr1] / market[curr2]).toFixed(2) == inlineMin) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
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
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnIiLCJhcnIxIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImNhbGMiLCJtYXJrZXQiLCJjdXJyMSIsImN1cnIyIiwiUlVCIiwiVVNEIiwiRVVSIiwibGVuZ3RoIiwidG9GaXhlZCIsImFsbHZhbHVlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiaW5saW5lTWluIiwiTWF0aCIsIm1pbiIsImFwcGx5Iiwic3R5bGVzIiwidXNlU3RhdGUiLCJzZXRGaXJzdCIsInNldFNlY29uZCIsInNldFRoaXJkIiwidG90YWwiLCJzZXRUb3RhbCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJhdGVzIiwiY2xlYXJUaW1lb3V0Iiwid3JhcHBlciIsInJlc3BUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBLE1BQUlDLElBQUksR0FBRztBQUNUQyxTQUFLLEVBQUUsQ0FERTtBQUVUQyxVQUFNLEVBQUUsQ0FGQztBQUdUQyxTQUFLLEVBQUU7QUFIRSxHQUFYOztBQUtBLFdBQVNDLElBQVQsQ0FBY0MsTUFBZCxFQUFzQkMsS0FBdEIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLFFBQUlGLE1BQU0sQ0FBQ0csR0FBUCxJQUFjSCxNQUFNLENBQUNJLEdBQXJCLElBQTRCSixNQUFNLENBQUNLLEdBQXZDLEVBQTRDO0FBQzFDLFVBQUlYLEdBQUcsQ0FBQ1ksTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ25CWixXQUFHLEdBQUcsRUFBTjtBQUNELE9BRkQsTUFFTztBQUNMQyxZQUFJLENB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O0FBQUEsc0JBQUtFLElBQUksQ0FBQ0QsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosSUFBNkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBK0JFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHNCQUFLQyxJQUFJLENBQUNILEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBLHNCQUFLRyxJQUFJLENBQUNGLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCLENBQUosSUFBOEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsc0JBQUtFLElBQUksQ0FBQ0QsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosSUFBNkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQTFJRDs7R0FBTUwsSzs7S0FBQUEsSztBQTRJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVhZGU0MWE3OWJjYmZlNjE5ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGxldCBhcnIgPSBbXTtcbiAgbGV0IGFycjEgPSB7XG4gICAgZmlyc3Q6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIHRoaXJkOiAwLFxuICB9XG4gIGZ1bmN0aW9uIGNhbGMobWFya2V0LCBjdXJyMSwgY3VycjIpIHtcbiAgICBpZiAobWFya2V0LlJVQiB8fCBtYXJrZXQuVVNEIHx8IG1hcmtldC5FVVIpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoID49IDMpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnIxLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKVxuICAgICAgICBhcnIxLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLlVTRCkudG9GaXhlZCgyKVxuICAgICAgICBhcnIxLnRoaXJkID0gKHRoaXJkLlJVQiAvIHRoaXJkLlVTRCkudG9GaXhlZCgyKVxuICAgICAgICAvLyBhcnIucHVzaCgoZmlyc3QuUlVCIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpKVxuICAgICAgICAvLyBhcnIucHVzaCgoc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMikpXG4gICAgICAgIC8vIGFyci5wdXNoKCh0aGlyZC5SVUIgLyB0aGlyZC5VU0QpLnRvRml4ZWQoMikpXG5cbiAgICAgICAgdmFyIGFsbHZhbHVlcyA9IE9iamVjdC5rZXlzKGFycjEpLm1hcChmdW5jdGlvbihrZXkpe3JldHVybiBhcnIxW2tleV07fSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbHZhbHVlcyk7XG4gICAgICB9XG4gICAgICAvLyBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgbGV0IGlubGluZU1pbiA9IE1hdGgubWluLmFwcGx5KG51bGwsIGFsbHZhbHVlcylcbiAgICAgIC8vIH1cbiAgICAgIGlmICgobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMikgPT0gaW5saW5lTWluICkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW59PnsgKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpfSA8L2Rpdj4gO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLScsIChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKSlcblxuICAgICAgcmV0dXJuIChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKTtcbiAgICB9XG4gIH1cbiAgbGV0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgbGV0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICBsZXQgW3RoaXJkLCBzZXRUaGlyZF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuXG4gIGxldCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gYXJyLnB1c2goLi4uZmlyc3QuUlVCLCBmaXJzdC5SVUIgLyBmaXJzdC5VU0QpO1xuICAvLyBhcnIucHVzaCguLi5zZWNvbmQuUlVCLCBzZWNvbmQuUlVCIC8gc2Vjb25kLlVTRCk7XG4gIC8vIGFyci5wdXNoKC4uLnRoaXJkLlJVQiwgdGhpcmQuUlVCIC8gdGhpcmQuVVNEKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2ZpcnN0JykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRGaXJzdChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW2ZpcnN0XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3NlY29uZCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0U2Vjb25kKHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbc2Vjb25kXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3RoaXJkJykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRUaGlyZChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3RoaXJkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnJlc3BUYWJ9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlBhaXIgbmFtZS9tYXJrZXQ8L3RoPlxuICAgICAgICAgICAgPHRoPkZpcnN0PC90aD5cbiAgICAgICAgICAgIDx0aD5TZWNvbmQ8L3RoPlxuICAgICAgICAgICAgPHRoPlRoaXJkPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9DVVBDQUtFIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7c2Vjb25kLlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlVTRC9DVVBDQUtFPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtzZWNvbmQuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+RVVSL0NVUENBS0U8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57c2Vjb25kLkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9VU0Q8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvRVVSPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+RVVSL1VTRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9