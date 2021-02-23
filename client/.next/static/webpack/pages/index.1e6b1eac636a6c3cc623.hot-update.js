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
      rubUsd.first = (first.RUB / first.USD).toFixed(2);
      rubUsd.second = (second.RUB / second.USD).toFixed(2);
      rubUsd.third = (third.RUB / third.USD).toFixed(2);
      rubEur.first = (first.RUB / first.EUR).toFixed(2);
      rubEur.second = (second.RUB / second.EUR).toFixed(2);
      rubEur.third = (third.RUB / third.EUR).toFixed(2);
      eurUsd.first = (first.EUR / first.USD).toFixed(2);
      eurUsd.second = (second.EUR / second.USD).toFixed(2);
      eurUsd.third = (third.EUR / third.USD).toFixed(2);
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

      if (currentValue == minValueRubUsd || currentValue == minValueRubEur || currentValue == minValueEurUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
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
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
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
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
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
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
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
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
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
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, _this);
};

_s(Index, "Nc76MoyuyAXS2p4V/kgjlrIZj+I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJydWJVc2QiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwicnViRXVyIiwiZXVyVXNkIiwiY2FsYyIsIm1hcmtldCIsImN1cnIxIiwiY3VycjIiLCJSVUIiLCJVU0QiLCJFVVIiLCJ0b0ZpeGVkIiwidmFsdWVzUnViVXNkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbHVlc1J1YkV1ciIsInZhbHVlc0V1clVzZCIsIm1pblZhbHVlUnViVXNkIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWluVmFsdWVSdWJFdXIiLCJtaW5WYWx1ZUV1clVzZCIsImN1cnJlbnRWYWx1ZSIsInN0eWxlcyIsInVzZVN0YXRlIiwic2V0Rmlyc3QiLCJzZXRTZWNvbmQiLCJzZXRUaGlyZCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJhdGVzIiwiY2xlYXJUaW1lb3V0Iiwid3JhcHBlciIsInJlc3BUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFJQyxNQUFNLEdBQUc7QUFDWEMsU0FBSyxFQUFFLENBREk7QUFFWEMsVUFBTSxFQUFFLENBRkc7QUFHWEMsU0FBSyxFQUFFO0FBSEksR0FBYjtBQUtBLE1BQUlDLE1BQU0sR0FBRztBQUNYSCxTQUFLLEVBQUUsQ0FESTtBQUVYQyxVQUFNLEVBQUUsQ0FGRztBQUdYQyxTQUFLLEVBQUU7QUFISSxHQUFiO0FBS0EsTUFBSUUsTUFBTSxHQUFHO0FBQ1hKLFNBQUssRUFBRSxDQURJO0FBRVhDLFVBQU0sRUFBRSxDQUZHO0FBR1hDLFNBQUssRUFBRTtBQUhJLEdBQWI7O0FBS0EsV0FBU0csSUFBVCxDQUFjQyxNQUFk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QUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBLHNCQUFLSyxJQUFJLENBQUNKLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCLENBQUosSUFBOEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsc0JBQUtJLElBQUksQ0FBQ0gsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosSUFBNkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBK0JFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHNCQUFLRyxJQUFJLENBQUNMLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBLHNCQUFLSyxJQUFJLENBQUNKLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCLENBQUosSUFBOEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsc0JBQUtJLElBQUksQ0FBQ0gsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosSUFBNkI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQWhKRDs7R0FBTUosSzs7S0FBQUEsSztBQWtKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWU2YjFlYWM2MzZhNmMzY2M2MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGxldCBydWJVc2QgPSB7XG4gICAgZmlyc3Q6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIHRoaXJkOiAwLFxuICB9O1xuICBsZXQgcnViRXVyID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfTtcbiAgbGV0IGV1clVzZCA9IHtcbiAgICBmaXJzdDogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgdGhpcmQ6IDAsXG4gIH07XG4gIGZ1bmN0aW9uIGNhbGMobWFya2V0LCBjdXJyMSwgY3VycjIpIHtcbiAgICBpZiAobWFya2V0LlJVQiB8fCBtYXJrZXQuVVNEIHx8IG1hcmtldC5FVVIpIHtcbiAgICAgIHJ1YlVzZC5maXJzdCA9IChmaXJzdC5SVUIgLyBmaXJzdC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICBydWJVc2Quc2Vjb25kID0gKHNlY29uZC5SVUIgLyBzZWNvbmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgcnViVXNkLnRoaXJkID0gKHRoaXJkLlJVQiAvIHRoaXJkLlVTRCkudG9GaXhlZCgyKTtcblxuICAgICAgcnViRXVyLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LkVVUikudG9GaXhlZCgyKTtcbiAgICAgIHJ1YkV1ci5zZWNvbmQgPSAoc2Vjb25kLlJVQiAvIHNlY29uZC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICBydWJFdXIudGhpcmQgPSAodGhpcmQuUlVCIC8gdGhpcmQuRVVSKS50b0ZpeGVkKDIpO1xuXG4gICAgICBldXJVc2QuZmlyc3QgPSAoZmlyc3QuRVVSIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgZXVyVXNkLnNlY29uZCA9IChzZWNvbmQuRVVSIC8gc2Vjb25kLlVTRCkudG9GaXhlZCgyKTtcbiAgICAgIGV1clVzZC50aGlyZCA9ICh0aGlyZC5FVVIgLyB0aGlyZC5VU0QpLnRvRml4ZWQoMik7XG5cbiAgICAgIGxldCB2YWx1ZXNSdWJVc2QgPSBPYmplY3Qua2V5cyhydWJVc2QpLm1hcChmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIHJ1YlVzZFtrZXldO30pO1xuICAgICAgbGV0IHZhbHVlc1J1YkV1ciA9IE9iamVjdC5rZXlzKHJ1YkV1cikubWFwKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4gcnViRXVyW2tleV07fSk7XG4gICAgICBsZXQgdmFsdWVzRXVyVXNkID0gT2JqZWN0LmtleXMoZXVyVXNkKS5tYXAoZnVuY3Rpb24gKGtleSkge3JldHVybiBldXJVc2Rba2V5XTt9KTtcblxuICAgICAgbGV0IG1pblZhbHVlUnViVXNkID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWVzUnViVXNkKTtcbiAgICAgIGxldCBtaW5WYWx1ZVJ1YkV1ciA9IE1hdGgubWluLmFwcGx5KG51bGwsIHZhbHVlc1J1YkV1cik7XG4gICAgICBsZXQgbWluVmFsdWVFdXJVc2QgPSBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZXNFdXJVc2QpO1xuXG4gICAgICBsZXQgY3VycmVudFZhbHVlID0gKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpO1xuXG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG1pblZhbHVlUnViVXNkIHx8IGN1cnJlbnRWYWx1ZSA9PSBtaW5WYWx1ZVJ1YkV1ciB8fCBjdXJyZW50VmFsdWUgPT0gbWluVmFsdWVFdXJVc2QgKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMik7XG4gICAgfVxuICB9XG4gIGxldCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbc2Vjb25kLCBzZXRTZWNvbmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgbGV0IFt0aGlyZCwgc2V0VGhpcmRdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvZmlyc3QnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldEZpcnN0KHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbZmlyc3RdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvc2Vjb25kJykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRTZWNvbmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtzZWNvbmRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvdGhpcmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFRoaXJkKHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbdGhpcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVzcFRhYn0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UGFpciBuYW1lL21hcmtldDwvdGg+XG4gICAgICAgICAgICA8dGg+Rmlyc3Q8L3RoPlxuICAgICAgICAgICAgPHRoPlNlY29uZDwvdGg+XG4gICAgICAgICAgICA8dGg+VGhpcmQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0NVUENBS0UgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtzZWNvbmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VVNEL0NVUENBS0U8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPntzZWNvbmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL1VTRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9FVVI8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=