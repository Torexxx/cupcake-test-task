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

        console.log(arr1);
      }

      if (arr.length) {
        console.log(Math.min.apply(null, arr)); // console.log(arr);
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
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnIiLCJhcnIxIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImNhbGMiLCJtYXJrZXQiLCJjdXJyMSIsImN1cnIyIiwiUlVCIiwiVVNEIiwiRVVSIiwibGVuZ3RoIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwibWluIiwiYXBwbHkiLCJ1c2VTdGF0ZSIsInNldEZpcnN0Iiwic2V0U2Vjb25kIiwic2V0VGhpcmQiLCJ0b3RhbCIsInNldFRvdGFsIiwidXNlRWZmZWN0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmF0ZXMiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJ3cmFwcGVyIiwicmVzcFRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRSxDQURFO0FBRVRDLFVBQU0sRUFBRSxDQUZDO0FBR1RDLFNBQUssRUFBRTtBQUhFLEdBQVg7O0FBS0EsV0FBU0MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsUUFBSUYsTUFBTSxDQUFDRyxHQUFQLElBQWNILE1BQU0sQ0FBQ0ksR0FBckIsSUFBNEJKLE1BQU0sQ0FBQ0ssR0FBdkMsRUFBNEM7QUFDMUMsVUFBSVgsR0FBRyxDQUFDWSxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDbkJaLFdBQUcsR0FBRyxFQUFOO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLFlBQUksQ0FBQ0MsS0FBTCxHQUFhLENBQUNBLEtBQUssQ0FBQ08sR0FBTixHQUFZUCxLQUFLLENBQUNR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QUFBQTtBQUFBO0FBQUEsaUJBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQXRJRDs7R0FBTUwsSzs7S0FBQUEsSztBQXdJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmI2ZDRhYTc0MDE5NDRhMjBhYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGxldCBhcnIgPSBbXTtcbiAgbGV0IGFycjEgPSB7XG4gICAgZmlyc3Q6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIHRoaXJkOiAwLFxuICB9XG4gIGZ1bmN0aW9uIGNhbGMobWFya2V0LCBjdXJyMSwgY3VycjIpIHtcbiAgICBpZiAobWFya2V0LlJVQiB8fCBtYXJrZXQuVVNEIHx8IG1hcmtldC5FVVIpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoID49IDMpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnIxLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKVxuICAgICAgICBhcnIxLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLlVTRCkudG9GaXhlZCgyKVxuICAgICAgICBhcnIxLnRoaXJkID0gKHRoaXJkLlJVQiAvIHRoaXJkLlVTRCkudG9GaXhlZCgyKVxuICAgICAgICAvLyBhcnIucHVzaCgoZmlyc3QuUlVCIC8gZmlyc3QuVVNEKS50b0ZpeGVkKDIpKVxuICAgICAgICAvLyBhcnIucHVzaCgoc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMikpXG4gICAgICAgIC8vIGFyci5wdXNoKCh0aGlyZC5SVUIgLyB0aGlyZC5VU0QpLnRvRml4ZWQoMikpXG4gICAgICAgIGNvbnNvbGUubG9nKGFycjEpXG4gICAgICB9XG4gICAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhNYXRoLm1pbi5hcHBseShudWxsLCBhcnIpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyKTtcbiAgICAgIH1cblxuXG4gICAgICByZXR1cm4gKG1hcmtldFtjdXJyMV0gLyBtYXJrZXRbY3VycjJdKS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgfVxuICBsZXQgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICBsZXQgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG4gIGxldCBbdGhpcmQsIHNldFRoaXJkXSA9IHVzZVN0YXRlKHtcbiAgICBSVUI6IDAsXG4gICAgVVNEOiAwLFxuICAgIEVVUjogMCxcbiAgfSk7XG5cbiAgbGV0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoW10pO1xuICAvLyBhcnIucHVzaCguLi5maXJzdC5SVUIsIGZpcnN0LlJVQiAvIGZpcnN0LlVTRCk7XG4gIC8vIGFyci5wdXNoKC4uLnNlY29uZC5SVUIsIHNlY29uZC5SVUIgLyBzZWNvbmQuVVNEKTtcbiAgLy8gYXJyLnB1c2goLi4udGhpcmQuUlVCLCB0aGlyZC5SVUIgLyB0aGlyZC5VU0QpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvZmlyc3QnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldEZpcnN0KHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbZmlyc3RdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvc2Vjb25kJykudGhlbigocmVzKSA9PlxuICAgICAgICBzZXRTZWNvbmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtzZWNvbmRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvdGhpcmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFRoaXJkKHJlcy5kYXRhLnJhdGVzKSxcbiAgICAgICk7XG4gICAgfSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9O1xuICB9LCBbdGhpcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVzcFRhYn0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UGFpciBuYW1lL21hcmtldDwvdGg+XG4gICAgICAgICAgICA8dGg+Rmlyc3Q8L3RoPlxuICAgICAgICAgICAgPHRoPlNlY29uZDwvdGg+XG4gICAgICAgICAgICA8dGg+VGhpcmQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0NVUENBS0UgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtzZWNvbmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLlJVQi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+VVNEL0NVUENBS0U8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuVVNELnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPntzZWNvbmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3RoaXJkLkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL1VTRDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlJVQi9FVVI8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ1JVQicsICdFVVInKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5FVVIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdFVVInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=