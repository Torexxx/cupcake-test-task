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

  var rubUsd = {
    first: 0,
    second: 0,
    third: 0
  };
  var rubEur = {
    first: 0,
    second: 0,
    third: 0
  };
  var eurUsd = {
    first: 0,
    second: 0,
    third: 0
  };

  function calc(market, curr1, curr2) {
    if (market.RUB || market.USD || market.EUR) {
      if (market === first) {
        rubUsd.first = (first.RUB / first.USD).toFixed(2);
        rubUsd.second = (second.RUB / second.USD).toFixed(2);
        rubUsd.third = (third.RUB / third.USD).toFixed(2);
      }

      if (market === second) {
        rubEur.first = (first.RUB / first.EUR).toFixed(2);
        rubEur.second = (second.RUB / second.EUR).toFixed(2);
        rubEur.third = (third.RUB / third.EUR).toFixed(2);
      }

      if (market === third) {
        eurUsd.first = (first.EUR / first.USD).toFixed(2);
        eurUsd.second = (second.EUR / second.USD).toFixed(2);
        eurUsd.third = (third.EUR / third.USD).toFixed(2);
      }

      var valuesRubUsd = Object.keys(rubUsd).map(function (key) {
        return rubUsd[key];
      });
      var valuesRubEur = Object.keys(rubEur).map(function (key) {
        return rubEur[key];
      });
      var valuesEurUsd = Object.keys(eurUsd).map(function (key) {
        return eurUsd[key];
      });
      var minValueRubUsd = Math.min.apply(null, valuesRubUsd);
      var minValueRubEur = Math.min.apply(null, valuesRubEur);
      var minValueEurUsd = Math.min.apply(null, valuesEurUsd);
      var currentValue = (market[curr1] / market[curr2]).toFixed(2);

      if (currentValue == minValueRubUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, this);
      }

      if (currentValue == minValueRubEur) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 16
        }, this);
      }

      if (currentValue == minValueEurUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 16
        }, this);
      }

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
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJydWJVc2QiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwicnViRXVyIiwiZXVyVXNkIiwiY2FsYyIsIm1hcmtldCIsImN1cnIxIiwiY3VycjIiLCJSVUIiLCJVU0QiLCJFVVIiLCJ0b0ZpeGVkIiwidmFsdWVzUnViVXNkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbHVlc1J1YkV1ciIsInZhbHVlc0V1clVzZCIsIm1pblZhbHVlUnViVXNkIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWluVmFsdWVSdWJFdXIiLCJtaW5WYWx1ZUV1clVzZCIsImN1cnJlbnRWYWx1ZSIsInN0eWxlcyIsInVzZVN0YXRlIiwic2V0Rmlyc3QiLCJzZXRTZWNvbmQiLCJzZXRUaGlyZCIsInRvdGFsIiwic2V0VG90YWwiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJyYXRlcyIsImNsZWFyVGltZW91dCIsIndyYXBwZXIiLCJyZXNwVGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBSUMsTUFBTSxHQUFHO0FBQ1hDLFNBQUssRUFBRSxDQURJO0FBRVhDLFVBQU0sRUFBRSxDQUZHO0FBR1hDLFNBQUssRUFBRTtBQUhJLEdBQWI7QUFLQSxNQUFJQyxNQUFNLEdBQUc7QUFDWEgsU0FBSyxFQUFFLENBREk7QUFFWEMsVUFBTSxFQUFFLENBRkc7QUFHWEMsU0FBSyxFQUFFO0FBSEksR0FBYjtBQUtBLE1BQUlFLE1BQU0sR0FBRztBQUNYSixTQUFLLEVBQUUsQ0FESTtBQUVYQyxVQUFNLEVBQUUsQ0FGRztBQUdYQyxTQUFLLEVBQUU7QUFISSxHQUFiOztBQUtBLFdB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RixlQStCRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0csSUFBSSxDQUFDTCxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FBSixJQUE2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxzQkFBS0ssSUFBSSxDQUFDSixNQUFELEVBQVMsS0FBVCxFQUFnQixLQUFoQixDQUFKLElBQThCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBLHNCQUFLSSxJQUFJLENBQUNILEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0FqS0Q7O0dBQU1KLEs7O0tBQUFBLEs7QUFtS1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhNDcxODVhNDQ5ZmEyMDI3YzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgcnViVXNkID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfVxuICBsZXQgcnViRXVyID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfVxuICBsZXQgZXVyVXNkID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfVxuICBmdW5jdGlvbiBjYWxjKG1hcmtldCwgY3VycjEsIGN1cnIyKSB7XG4gICAgaWYgKG1hcmtldC5SVUIgfHwgbWFya2V0LlVTRCB8fCBtYXJrZXQuRVVSKSB7XG4gICAgICBpZiAobWFya2V0ID09PSBmaXJzdCkge1xuICAgICAgICBydWJVc2QuZmlyc3QgPSAoZmlyc3QuUlVCIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgICBydWJVc2Quc2Vjb25kID0gKHNlY29uZC5SVUIgLyBzZWNvbmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgICBydWJVc2QudGhpcmQgPSAodGhpcmQuUlVCIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgfVxuICAgICAgaWYgKG1hcmtldCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJ1YkV1ci5maXJzdCA9IChmaXJzdC5SVUIgLyBmaXJzdC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICAgIHJ1YkV1ci5zZWNvbmQgPSAoc2Vjb25kLlJVQiAvIHNlY29uZC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICAgIHJ1YkV1ci50aGlyZCA9ICh0aGlyZC5SVUIgLyB0aGlyZC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICB9XG4gICAgICBpZiAobWFya2V0ID09PSB0aGlyZCkge1xuICAgICAgICBldXJVc2QuZmlyc3QgPSAoZmlyc3QuRVVSIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgICBldXJVc2Quc2Vjb25kID0gKHNlY29uZC5FVVIgLyBzZWNvbmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgICBldXJVc2QudGhpcmQgPSAodGhpcmQuRVVSIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFsdWVzUnViVXNkID0gT2JqZWN0LmtleXMocnViVXNkKS5tYXAoZnVuY3Rpb24oa2V5KXtyZXR1cm4gcnViVXNkW2tleV07fSk7XG4gICAgICBsZXQgdmFsdWVzUnViRXVyID0gT2JqZWN0LmtleXMocnViRXVyKS5tYXAoZnVuY3Rpb24oa2V5KXtyZXR1cm4gcnViRXVyW2tleV07fSk7XG4gICAgICBsZXQgdmFsdWVzRXVyVXNkID0gT2JqZWN0LmtleXMoZXVyVXNkKS5tYXAoZnVuY3Rpb24oa2V5KXtyZXR1cm4gZXVyVXNkW2tleV07fSk7XG5cbiAgICAgIGxldCBtaW5WYWx1ZVJ1YlVzZCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHZhbHVlc1J1YlVzZCk7XG4gICAgICBsZXQgbWluVmFsdWVSdWJFdXIgPSBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZXNSdWJFdXIpO1xuICAgICAgbGV0IG1pblZhbHVlRXVyVXNkID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWVzRXVyVXNkKTtcblxuICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKTtcblxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PSBtaW5WYWx1ZVJ1YlVzZCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW59PnsgKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpfSA8L2Rpdj47XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG1pblZhbHVlUnViRXVyKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG1pblZhbHVlRXVyVXNkKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgfVxuICBsZXQgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICBsZXQgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbdGhpcmQsIHNldFRoaXJkXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG5cbiAgbGV0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoW10pO1xuICAvLyBhcnIucHVzaCguLi5maXJzdC5SVUIsIGZpcnN0LlJVQiAvIGZpcnN0LlVTRCk7XG4gIC8vIGFyci5wdXNoKC4uLnNlY29uZC5SVUIsIHNlY29uZC5SVUIgLyBzZWNvbmQuVVNEKTtcbiAgLy8gYXJyLnB1c2goLi4udGhpcmQuUlVCLCB0aGlyZC5SVUIgLyB0aGlyZC5VU0QpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvZmlyc3QnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldEZpcnN0KHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbZmlyc3RdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvc2Vjb25kJykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRTZWNvbmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtzZWNvbmRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvdGhpcmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFRoaXJkKHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbdGhpcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVzcFRhYn0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UGFpciBuYW1lL21hcmtldDwvdGg+XG4gICAgICAgICAgICA8dGg+Rmlyc3Q8L3RoPlxuICAgICAgICAgICAgPHRoPlNlY29uZDwvdGg+XG4gICAgICAgICAgICA8dGg+VGhpcmQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0NVUENBS0UgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtzZWNvbmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VVNEL0NVUENBS0U8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPntzZWNvbmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL1VTRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9FVVI8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=