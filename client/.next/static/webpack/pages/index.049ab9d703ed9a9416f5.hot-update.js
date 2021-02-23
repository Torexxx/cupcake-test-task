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

      if (currentValue == minValueRubUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 16
        }, this);
      }

      if (currentValue == minValueRubEur) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 16
        }, this);
      }

      if (currentValue == minValueEurUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: [(market[curr1] / market[curr2]).toFixed(2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
    }, 100);
    return function () {
      clearTimeout(timeout);
    };
  }, [first]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/second').then(function (res) {
        return setSecond(res.data.rates);
      });
    }, 100);
    return function () {
      clearTimeout(timeout);
    };
  }, [second]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/third').then(function (res) {
        return setThird(res.data.rates);
      });
    }, 100);
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
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
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
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
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
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
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
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
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
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJydWJVc2QiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwicnViRXVyIiwiZXVyVXNkIiwiY2FsYyIsIm1hcmtldCIsImN1cnIxIiwiY3VycjIiLCJSVUIiLCJVU0QiLCJFVVIiLCJ0b0ZpeGVkIiwidmFsdWVzUnViVXNkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbHVlc1J1YkV1ciIsInZhbHVlc0V1clVzZCIsIm1pblZhbHVlUnViVXNkIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWluVmFsdWVSdWJFdXIiLCJtaW5WYWx1ZUV1clVzZCIsImN1cnJlbnRWYWx1ZSIsInN0eWxlcyIsInVzZVN0YXRlIiwic2V0Rmlyc3QiLCJzZXRTZWNvbmQiLCJzZXRUaGlyZCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJhdGVzIiwiY2xlYXJUaW1lb3V0Iiwid3JhcHBlciIsInJlc3BUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFJQyxNQUFNLEdBQUc7QUFDWEMsU0FBSyxFQUFFLENBREk7QUFFWEMsVUFBTSxFQUFFLENBRkc7QUFHWEMsU0FBSyxFQUFFO0FBSEksR0FBYjtBQUtBLE1BQUlDLE1BQU0sR0FBRztBQUNYSCxTQUFLLEVBQUUsQ0FESTtBQUVYQyxVQUFNLEVBQUUsQ0FGRztBQUdYQyxTQUFLLEVBQUU7QUFISSxHQUFiO0FBS0EsTUFBSUUsTUFBTSxHQUFHO0FBQ1hKLFNBQUssRUFBRSxDQURJO0FBRVhDLFVBQU0sRUFBRSxDQUZHO0FBR1hDLFNBQUssRUFBRTtBQUhJLEdBQWI7O0FBS0EsV0FBU0csSUFBVCxDQUFjQyxNQUFk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QTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBLHNCQUFLSSxJQUFJLENBQUNILEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFKLElBQTZCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvREQsQ0F0SkQ7O0dBQU1KLEs7O0tBQUFBLEs7QUF3SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0OWFiOWQ3MDNlZDlhOTQxNmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgcnViVXNkID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfTtcbiAgbGV0IHJ1YkV1ciA9IHtcbiAgICBmaXJzdDogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgdGhpcmQ6IDAsXG4gIH07XG4gIGxldCBldXJVc2QgPSB7XG4gICAgZmlyc3Q6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIHRoaXJkOiAwLFxuICB9O1xuICBmdW5jdGlvbiBjYWxjKG1hcmtldCwgY3VycjEsIGN1cnIyKSB7XG4gICAgaWYgKG1hcmtldC5SVUIgfHwgbWFya2V0LlVTRCB8fCBtYXJrZXQuRVVSKSB7XG4gICAgICBydWJVc2QuZmlyc3QgPSAoZmlyc3QuUlVCIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgcnViVXNkLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLlVTRCkudG9GaXhlZCgyKTtcbiAgICAgIHJ1YlVzZC50aGlyZCA9ICh0aGlyZC5SVUIgLyB0aGlyZC5VU0QpLnRvRml4ZWQoMik7XG5cbiAgICAgIHJ1YkV1ci5maXJzdCA9IChmaXJzdC5SVUIgLyBmaXJzdC5FVVIpLnRvRml4ZWQoMik7XG4gICAgICBydWJFdXIuc2Vjb25kID0gKHNlY29uZC5SVUIgLyBzZWNvbmQuRVVSKS50b0ZpeGVkKDIpO1xuICAgICAgcnViRXVyLnRoaXJkID0gKHRoaXJkLlJVQiAvIHRoaXJkLkVVUikudG9GaXhlZCgyKTtcblxuICAgICAgZXVyVXNkLmZpcnN0ID0gKGZpcnN0LkVVUiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKTtcbiAgICAgIGV1clVzZC5zZWNvbmQgPSAoc2Vjb25kLkVVUiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICBldXJVc2QudGhpcmQgPSAodGhpcmQuRVVSIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuXG4gICAgICBsZXQgdmFsdWVzUnViVXNkID0gT2JqZWN0LmtleXMocnViVXNkKS5tYXAoZnVuY3Rpb24gKGtleSkge3JldHVybiBydWJVc2Rba2V5XTt9KTtcbiAgICAgIGxldCB2YWx1ZXNSdWJFdXIgPSBPYmplY3Qua2V5cyhydWJFdXIpLm1hcChmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIHJ1YkV1cltrZXldO30pO1xuICAgICAgbGV0IHZhbHVlc0V1clVzZCA9IE9iamVjdC5rZXlzKGV1clVzZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4gZXVyVXNkW2tleV07fSk7XG5cbiAgICAgIGxldCBtaW5WYWx1ZVJ1YlVzZCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHZhbHVlc1J1YlVzZCk7XG4gICAgICBsZXQgbWluVmFsdWVSdWJFdXIgPSBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZXNSdWJFdXIpO1xuICAgICAgbGV0IG1pblZhbHVlRXVyVXNkID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWVzRXVyVXNkKTtcblxuICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IChtYXJrZXRbY3VycjFdIC8gbWFya2V0W2N1cnIyXSkudG9GaXhlZCgyKTtcblxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PSBtaW5WYWx1ZVJ1YlVzZCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW59PnsgKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpfSA8L2Rpdj47XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG1pblZhbHVlUnViRXVyKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG1pblZhbHVlRXVyVXNkKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbn0+eyAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMil9IDwvZGl2PiA7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgfVxuICBsZXQgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICBsZXQgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbdGhpcmQsIHNldFRoaXJkXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF4aW9zKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2ZpcnN0JykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRGaXJzdChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbZmlyc3RdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvc2Vjb25kJykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRTZWNvbmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAxMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3NlY29uZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS90aGlyZCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0VGhpcmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAxMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3RoaXJkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnJlc3BUYWJ9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlBhaXIgbmFtZS9tYXJrZXQ8L3RoPlxuICAgICAgICAgICAgPHRoPkZpcnN0PC90aD5cbiAgICAgICAgICAgIDx0aD5TZWNvbmQ8L3RoPlxuICAgICAgICAgICAgPHRoPlRoaXJkPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9DVVBDQUtFIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7c2Vjb25kLlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlVTRC9DVVBDQUtFPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtzZWNvbmQuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+RVVSL0NVUENBS0U8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57c2Vjb25kLkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9VU0Q8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvRVVSPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+RVVSL1VTRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9